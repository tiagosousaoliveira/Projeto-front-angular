import { Component, OnInit, Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions, } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

@Injectable()
export class Service{


  url_base: string
  constructor(private http: Http) {
    this.url_base = "http://localhost:8080/postt/usuario"
  }
  private setHeaders(): Headers {
    const headersConfig = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    };
    return new Headers(headersConfig);
  }
  // post(body:any): Observable<any> {
  //   debugger
  //   return this.http.post("localhost:8080/postt/usuario", body).pipe(map(response => response.json()))
  // }

  post(body: Object = {}): Observable<any> {
    return this.http.post(
      this.url_base ,
      JSON.stringify(body),
      { headers: this.setHeaders() }).pipe(map(response => response.json()))
  }

  get(){

  }
}
