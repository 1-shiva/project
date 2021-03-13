import { Component, OnInit } from '@angular/core';
import { MonaService } from '../mona.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  posts:any
  productdata:any
  constructor( private _mona:MonaService) { }

  ngOnInit():  void { 
    this._mona.shiva().subscribe((response:any)=>{
      console.log(response)
      this.productdata=response
    })
  }

}
