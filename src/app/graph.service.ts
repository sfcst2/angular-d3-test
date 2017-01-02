import { Injectable } from '@angular/core';
import {Http, Response, Headers, URLSearchParams} from '@angular/http';
import {GraphServiceConfiguration} from './graph.service.configuration';
import {Observable} from 'rxjs/Rx';
import {Graph} from './models/graph.model';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class GraphService {

  private headers:Headers;  

  constructor(private _http:Http, private _config:GraphServiceConfiguration) {

    this.headers = new Headers();
    this.headers.append('Content-Type','application/json');
    this.headers.append('Accept','application/json');    
   }

/**
 * This function will take in the id of the root node, and attempt
 * to query the rest end point for the number of levels you pass in
 */
   public getNodes(rootNodeId:number, depth:number) : Observable<Graph>{
     let params = new URLSearchParams();     
     if (rootNodeId != null) {
       params.set('rootNodeId',rootNodeId.toString());
     }
     // Default to depth of 3 if one isn't passed in
     if (depth == null){
       depth = 3;
     }
     console.log("!!!!!!!!! about to get the nodes from " + this._config.getServerwithApiURL());
    
     return this._http.get(this._config.getServerwithApiURL(),{
       search : params
     }).map((res:Response) =>  res.json())
     .catch((error:any) => Observable.throw(error.json().error || "Server Error"));
   }
}
