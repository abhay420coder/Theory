import { BreakpointObserver } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { CurrentUserService } from '../services/current-user.service';
import { RolesPermissionsService } from '../services/roles-permissions.service';
import { WebsocketService } from '../services/websocket.service';
import { ADMIN_OVERRIDE_ROLE, PERMISSION } from './constants';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  showFiller = true;
  navbarOpen:boolean = false;
  navLoading: boolean = true;
  skeletonCount: any[] = new Array(5);
  navMenu: any[] = []
  currentUserData: any = undefined;
  sideNavMode: string = "side";

  constructor(
    private api:ApiService, 
    private websocket: WebsocketService, 
    private cus: CurrentUserService,
    private roles: RolesPermissionsService,
    private breakPointObserver: BreakpointObserver,
    private cd: ChangeDetectorRef) { }

  async ngOnInit(): Promise<void> {
    this.cus.currentUser.subscribe(data=>{
      if (JSON.stringify(data)!=='{}') {
        this.navLoading = false;
        this.currentUserData = data;
        this.navMenu = [
          {
            displayName: "Services",
            url: "service",
            iconClass: "_services-icon",
            disabled: !(data.permissionList.includes(PERMISSION.SERVICE.READ) || data.permissionList.includes(PERMISSION.SERVICE.ADD) || this.currentUserData.permissionList.includes(ADMIN_OVERRIDE_ROLE)),
            children: []
          },
          {
            displayName: "Service Release",
            url: "service-release",
            iconClass: "_service-release-icon",
            disabled: !(data.permissionList.includes(PERMISSION.SERVICE_RELEASE.READ) || data.permissionList.includes(PERMISSION.SERVICE_RELEASE.ADD) || this.currentUserData.permissionList.includes(ADMIN_OVERRIDE_ROLE)),
            children: []
          },
          {
            displayName: "K8s Spec Templates",
            url: "templates",
            iconClass: "_navbar-template-icon",
            disabled: !(data.permissionList.includes(PERMISSION.SPEC.READ) || data.permissionList.includes(PERMISSION.SPEC.ADD) || this.currentUserData.permissionList.includes(ADMIN_OVERRIDE_ROLE)),
            children: []
          },
          {
            displayName: "Release Train",
            url: "release-train",
            iconClass: "_release-train-icon",
            disabled: !(data.permissionList.includes(PERMISSION.RT.READ) || data.permissionList.includes(PERMISSION.RT.ADD) || this.currentUserData.permissionList.includes(ADMIN_OVERRIDE_ROLE)),
            children: []
          },
          {
            displayName: "Kubernetes",
            url: "",
            iconClass: "_kubernetes-icon",
            disabled: false,
            children: [
              {
                displayName: "Namespace",
                url: "kubernetes-namespace",
                iconClass: "_namespace-icon",
                disabled: !(data.permissionList.includes(PERMISSION.NS.READ) || data.permissionList.includes(PERMISSION.NS.ADD) || this.currentUserData.permissionList.includes(ADMIN_OVERRIDE_ROLE)),
                children: []
              },
              {
                displayName: "K8S Templates",
                url: "kubernetes-templates",
                iconClass: "_namespace-icon",
                disabled: false,
                children: []
              },
              {
                displayName: "Node List",
                url: "k8s-nodeList",
                iconClass: "_node-list-icon",
                disabled: false,
                children: []
              },
              {
                displayName: "Cluster Overview",
                url: "status-view/cluster",
                iconClass: "_node-list-icon",
                disabled: false,
                children: []
              }
            ]
          },
          {
            displayName: "Release Train Deployment",
            url: "rt-deployments",
            iconClass: "_release-train-deployment-icon",
            // disabled: !(data.permissionList.includes(PERMISSION.RT.READ) || this.currentUserData.permissionList.includes(ADMIN_OVERRIDE_ROLE)),
            disabled: false,
            children: []
          },
          {
            displayName: "Monitoring",
            url: "monitoring",
            iconClass: "_navbar-monitoring-icon",
            // disabled: !(data.permissionList.includes(PERMISSION.RT.READ) || this.currentUserData.permissionList.includes(ADMIN_OVERRIDE_ROLE)),
            disabled: false,
            children: [
              {
                displayName: "Logs",
                url: "monitoring/logs",
                iconClass: "_navbar-logs-icon",
                // disabled: !(data.permissionList.includes(PERMISSION.RT.READ) || this.currentUserData.permissionList.includes(ADMIN_OVERRIDE_ROLE)),
                disabled: false,
                children: []
              },
              {
                displayName: "DB Monitoring",
                url: "monitoring/db-monitoring",
                iconClass: "_navbar-logs-icon",
                // disabled: !(data.permissionList.includes(PERMISSION.RT.READ) || this.currentUserData.permissionList.includes(ADMIN_OVERRIDE_ROLE)),
                disabled: false,
                children: []
              }
            ]
          }          
        ]
        
      }
    })

    this.websocket.connectWebSocket();
    // setTimeout(()=>{
    //   this.websocket.closeConnection();
    // }, 2000);    
    await this.roles.fetchAllRolesAndPermissions();
  }

  ngAfterViewInit(): void {
    this.breakPointObserver.observe(['(max-width: 767px)']).subscribe(res=>{
      if(res.matches){
        this.navbarOpen = false;
        this.sideNavMode = "over";        
      } else {
        this.navbarOpen = true;
        this.sideNavMode = "side";
      }
      this.cd.detectChanges();
    });
  }

  handleNavClick(ev: any){
    switch(ev){
      case 'navbar':
        this.navbarOpen = !this.navbarOpen;
        break;
    }
  }
}
