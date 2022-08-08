import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Respuestas } from "../models/respuestas";
import { global } from "./global";

@Injectable()
export class RespuestaService{
    public url:string|any;
    constructor(
        public _http: HttpClient
    ){
        this.url = global.url;
    }

    create(respuestas:any):Observable<any>{
        let json = JSON.stringify(respuestas);
        let params = 'json='+json;

        let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
        return this._http.post(this.url+'Respuestas',params,{headers:headers});
    }
}