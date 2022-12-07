import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  color = "";
  priceTo = 0;
  priceFrom = 0;
  size = "M";


  /* 
  // it is for parametrized routes
    // create an instance of ActivatedRoute
  // instance is nothing but construction injector
  constructor(private activatedRoute : ActivatedRoute) { 
    this.activatedRoute.params.subscribe((param)=> {
      this.photoId=param['photoId']
      this.productId=param['productId']
      console.log(param);
    })
  }
  */


  // it is for query params
  // create an instance of ActivatedRoute
  // instance is nothing but construction injector
  constructor(private activatedRoute:ActivatedRoute) {
    this.activatedRoute.queryParams.subscribe(params=>{
      console.log(params)
      this.color = params['color']
      this.priceTo = params['priceTo'];
      this.priceFrom = params['priceFrom'];
      this.size = params['size'];
    })
   }

  ngOnInit(): void {
  }

}

/* 
if i will write below link in url
http://localhost:4300/app1#/search?id=10&color=red&size=L&priceFrom=1000&priceTo=49999 

then i get output
                      Color : red
                      Size : L
                      Price From : 1000
                      Price To : 49999
*/
