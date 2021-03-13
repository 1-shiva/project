import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MonaService {

  constructor(private httpClient: HttpClient) { }

  public shiva(){
    return this.httpClient.get<Product>("http://localhost:3000/posts");
  }
}


export interface Product {
  id: number;
  title: string;
  author:string;
}