import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { DependencyService } from 'src/app/services/dependency.service';
import * as d3 from 'd3';
import { CloseScrollStrategy } from '@angular/cdk/overlay';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'service-dependency-tree-view',
  templateUrl: './service-dependency-tree-view.component.html',
  styleUrls: ['./service-dependency-tree-view.component.scss']
})
export class ServiceDependencyTreeViewComponent {
  //chart properties
  chart = {
    width: 600,
    height: 600
  }

  //arrow marker properties
  marker = {
    width: 14,
    height: 14
  }

  markerRef = {
    refX: this.marker.width/2,
    refY: this.marker.height/2
  }

  markerPoints: any = [[-7, 2], [-7, 12], [14-10, 14/2], [-7, 2]];

  treeData = new Subject<any>();
  nodes:any[] = new Array();
  links:any[] = new Array();
  loading: boolean = true;

  constructor(private dependency: DependencyService, private router: Router, private route: ActivatedRoute) { }

  ngAfterViewInit() {
    //manually set active link state to service release nav item
    d3.select('#service-release').classed('_active-link', true);

    //call getDependencyTree() to populate treeData
    this.getDependencyTree();
  }

  ngOnInit(): void {
    //subscribe to the treeData observable and call drawTree() on data change
    this.treeData.subscribe((data: any)=>{
      this.drawTree(data);
    })
  }

  ngOnDestroy(): void {
    //clear active link state from service release nav item
    d3.select('#service-release').classed('_active-link', false);
  }

  getDependencyTree(){
    //Check if the dependency tree data is present in local storage. If not call buildDependencyTree()
    if(window.localStorage.getItem('dependencyTree')||false){
      //parse the data and populate treeData
      //THIS PROMISE IS INTENTIONALLY KEPT TO MAKE SURE VIEW LOADS BEFORE D3 METHODS ARE CALLED
      const treeData = new Promise((resolve, reject)=>{
        const data = JSON.parse(window.localStorage.getItem('dependencyTree'));
        resolve(data);
      }) 
      treeData.then(data=>{
        this.treeData.next(data);
      });
      
    } else {
      this.buildDependencyTree();
    }
  }

  async buildDependencyTree(){
    //fetch root services from api
    const services: any = await this.dependency.getRootServices();
    //for each root service get dependent services
    const tree = services.map(async (service:any)=>{
      return {
        name: service.serviceName,
        branch: service.srBranch,
        version: service.srVersion,
        releaseNote: service.releaseNote,
        children: await this.getDependentServices(service)
      };
    });
    //resolve JSON structure and save to observable and local storage
    Promise.all(tree).then((resolvedData)=>{
      const finalTree = {
        name: "Your App",
        children: resolvedData
      }
      this.treeData.next(finalTree);
      window.localStorage.setItem('dependencyTree', JSON.stringify(finalTree));
    });
  }

  async getDependentServices(service: any){
    // if(service.dependentServiceCount>0){
      const dep:any = await this.dependency.getDependentService(service.srId);
      const retData = dep.map(async (item:any)=>{
        return {
          name: item.serviceName,
          branch: service.srBranch,
          version: service.srVersion,
          releaseNote: item.releaseNote,
          children: await this.getDependentServices(item)
        }
      })
      const dt = await Promise.all(retData).then(resolved=>{
        return resolved
      })
      return dt;
    // } else {
    //   return [];
    // }
    
  }

  refreshTree(){
    //clear localStorage dependency tree
    //refresh the dependency tree by calling buildDependencyTree() again
    console.log("Refresh triggered");
    this.loading = true;
    window.localStorage.removeItem('dependencyTree');
    this.nodes = [];
    this.links = [];
    this.clearTree();
    this.buildDependencyTree();
  }

  convertData(parent: any){
    var firstLevel = this.nodes.length===0?true:false;
    parent.children.map((child:any)=>{
      if(this.nodes.filter(item=>item.id===child.name).length===0){
        this.nodes.push({id: child.name, branch: child.branch, version: child.version, releaseNote: child.releaseNote, group: 1});
      }
      if(this.links.filter(item=>item.source===parent.name&&item.target===child.name).length===0 && !firstLevel){
        this.links.push({source: parent.name, target: child.name, value: 5});
      }
      this.convertData(child);
    });
  }

  drawTree(treeData: any){
    this.convertData(treeData);
    const links = this.links;
    const nodes = this.nodes;
    const linkedByIndex = {};

    //stop loading
    this.loading = false;
    
    //select svg element
    const svg = d3.select('#treeView');

    //populate svg height and width from responsive container
    this.chart.width = parseInt(svg.style('width'));
    this.chart.height = parseInt(svg.style('height'));

    //create d3 color pallete from preset color scheme
    const colorPallete = d3.scaleOrdinal().domain(nodes)
      .range(d3.schemeSet2);
    
    //set svg properties
    svg.attr("preserveAspectRatio", "xMinYMin meet")
      .attr("viewBox", `0 0 ${this.chart.width} ${this.chart.height}`);

    //create d3 simulation
    const simulation = d3.forceSimulation(nodes)
      .force("link", d3.forceLink(links).id((d:any) => d.id).distance(80))
      .force("charge", d3.forceManyBody().strength(-500))
      .force("x", d3.forceX(this.chart.width / 2))
      .force("y", d3.forceY(this.chart.height / 2))
      // .force('center', d3.forceCenter(this.chart.width / 2, this.chart.height / 2));

    //add marker(arrow) definitions to svg element
    const marker = svg.append('defs')
      .selectAll('marker')
      .data(links)
      .enter().append('marker')
      .attr('id', d=>"arrow"+colorPallete(d.source.index))
      .attr('viewbox', `[0, 0, ${this.marker.width}, ${this.marker.height}]`)
      .attr("refX", this.markerRef.refX)
      .attr('refY', this.markerRef.refY)
      .attr('markerWidth', this.marker.width)
      .attr('markerHeight', this.marker.height)
      .attr('orient', 'auto-start-reverse')
      .append('path')
      .attr('d', d3.line()(this.markerPoints))
      .attr('stroke', d=><any>colorPallete(d.source.index))
      .attr('fill', d=><any>colorPallete(d.source.index))

    //create source target map for links
    links.forEach(d => {
      linkedByIndex[`${d.source.index},${d.target.index}`] = 1;
    });

    //add link elements to the svg
    const link = svg.append("g")
      .attr("stroke-opacity", 0.6)
      .selectAll("line")
      .data(links)
      .enter().append('line')
      .attr("stroke", d=><any>colorPallete(d.source.index))
      .attr("stroke-width", (d:any) => {return Math.sqrt(d.value)})
      .attr('marker-end', d=>`url(#arrow${colorPallete(d.source.index)})`)
      .on('mouseout.fade', fade(1));

    //add node elements to the svg
    const node = svg.append("g")
      .selectAll("g")
      .data(nodes)
      .enter().append("g")
      .on('mouseover.fade', fade(0.1))
      .on('mouseout.fade', fade(1))
      .call(drag(simulation))

    //add spacer to the node
    const spacer = node.append("rect")
      .attr('width', 5)
      .attr('height', 10)
      .attr('x', 4)
      .attr('y', -5)
      .attr('fill', 'white');

    //add circle to the node
    const circle = node.append("circle")
      .attr('r', 5)
      .attr('fill', d=><any>colorPallete(d.index))

    //add first layer labels to the node
    const labelLayer1 = node.append("text")
      .text((d:any)=>d.id)
      .attr('x', 9)
      .attr('y', 4)
      .style('font-weight', '500');

    //add second layer labels to the node
    const labelLayer2 = node.append("text")
      .text((d:any)=>`${d.releaseNote?d.releaseNote:''}`)
      .attr('x', 9)
      .attr('y', 18)
      .style('font-size', '10px')

    //set simulation event handler
    simulation.on("tick", () => {
      link
        .attr("x1", (d:any) => d.source.x)
        .attr("y1", (d:any) => d.source.y)
        .attr("x2", (d:any) => d.target.x)
        .attr("y2", (d:any) => d.target.y);

      node
        .attr("transform", function(d) {
          return "translate(" + d.x + "," + d.y + ")";
        })
    });

    

    //helper function for fading on mouse event
    function fade(opacity) {
      return function (event:any, d:any){
        const transitionTime = 200;
        node.style('cursor', 'pointer')
          .transition()
          .duration(transitionTime)
          .attr('opacity', (o)=>isConnected(d, o) ? 1 : opacity);
        
        // link.style('stroke-opacity', o => (o.source === d || o.target === d ? 1 : opacity));
        link.transition()
          .duration(transitionTime)
          .attr('opacity', (o)=>o.source === d ? 1 : opacity);

        marker.transition()
          .duration(transitionTime)
          .attr('opacity', (o)=>o.source === d ? 1 : opacity);
      };
    }

    //helper function to determine connection between nodes
    function isConnected(a, b) {
      // return linkedByIndex[`${a.index},${b.index}`] || linkedByIndex[`${b.index},${a.index}`] || a.index === b.index;
      return linkedByIndex[`${a.index},${b.index}`] || a.index === b.index;
    }

    //helper function drag handler
    function drag(simulation){
      function dragstarted(event) {
        if (!event.active) simulation.alphaTarget(0.3).restart();
        event.subject.fx = event.subject.x;
        event.subject.fy = event.subject.y;
      }
      
      function dragged(event) {
        event.subject.fx = event.x;
        event.subject.fy = event.y;
      }
      
      function dragended(event) {
        if (!event.active) simulation.alphaTarget(0);
        event.subject.fx = null;
        event.subject.fy = null;
      }
      
      return d3.drag()
          .on("start", dragstarted)
          .on("drag", dragged)
          .on("end", dragended);
    }
  }

  clearTree(){
    d3.select('#treeView').html('');
  }

  navigateBack(){
    this.router.navigate(['../service-release'], {relativeTo: this.route});
  }
}
