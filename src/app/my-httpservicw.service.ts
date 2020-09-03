import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const localUrl='https://api.openbrewerydb.org/breweries';
@Injectable({
  providedIn: 'root'
})
export class MyHttpservicwService {


  constructor(private http_client:HttpClient) { }
  myMethod(){
    return console.log("hey Wassap??")
  }
  getProductList(){
    return this.http_client.get(localUrl)
  }
}
