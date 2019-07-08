import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
@Injectable()

export class CategoryService {
    private apiUrl = "http://5d22c0a54e05c600146ef58a.mockapi.io/category/"
    constructor(private _http: Http) {

    }
    
    GetCategory(): Observable<any>{
       return   this._http.get(this.apiUrl).map((response: Response) => response.json())
    }
}


