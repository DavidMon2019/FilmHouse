import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import 'rxjs/add/operator/map';

@Injectable({
    providedIn: 'root' 
})
export class ComentariosService {
    private comentarios = 'http://localhost:8080/comentarios';
    private headders = new HttpHeaders({
        'Content-Type': 'application/json'
    });

    constructor(private http: HttpClient) {
    }

    public getComments(params: any, id: string): Observable<any> {
        const url = `${this.comentarios}/${id}`;
        return this.http.get(url, {headers: this.headders, params: params});
    }

    public setComments(comments): Observable<any> {
        const url = `${this.comentarios}/insert/notification`;
        let val = JSON.stringify(comments);
        return this.http.post(url, val, {headers: this.headders});
    }
}
