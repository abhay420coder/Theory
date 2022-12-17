import { Component, OnInit } from '@angular/core';

// import a class ActivatedRoute form '@angular/router'
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  photoId = 0 ;
  productId = 0 ;

  // create an instance of ActivatedRoute
  // instance is nothing but construction injector
  constructor(private activatedRoute : ActivatedRoute) { 
    this.activatedRoute.params.subscribe((param)=> {
      this.photoId=param['photoId']
      this.productId=param['productId']
      console.log(param);
    })
  }

  ngOnInit(): void {
  }

}
