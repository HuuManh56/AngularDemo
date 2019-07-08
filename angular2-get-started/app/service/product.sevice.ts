import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
@Injectable()

export class listProduct {
    private apiUrl = "http://5d2188c22ba8cf0014c44b2f.mockapi.io/api/product/"
    constructor(private _http: Http) {

    }
    GetList(): Observable<any[]> {
        return this._http.get(this.apiUrl).map((response: Response) => response.json())
    }
    GetDetail( id: number): Observable<any> {
        return this._http.get(this.apiUrl+ id).map((response: Response) => response.json())
    }
    Update(id:number, data:any): Observable<any>{
        return this._http.put(this.apiUrl+id, data).map((response: Response)=>response.json())
    }
    Add(data:any): Observable<any>{
        return this._http.post(this.apiUrl, data).map((reponse: Response)=>reponse.json())
    }
    Delete(id: number): Observable<any>{
        return this._http.delete(this.apiUrl + id).map((reponse: Response)=>reponse.json())
    }
}


