import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }
  url = 'http://localhost:8000/products';
  getAllData(){
    let token = localStorage.getItem("token")
    return this.httpClient.get(this.url, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
  }
}