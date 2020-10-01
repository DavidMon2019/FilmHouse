import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import 'rxjs/add/operator/map';

@Injectable({
    providedIn: 'root'
})
export class PeliculasService {
    private peliculas = 'http://localhost:8989/pelicula';
    private headders = new HttpHeaders({
        'Content-Type': 'application/json'
    });

    constructor(private http: HttpClient) {
    }

    /*metodo para obtener todas las peliculas*/
    public getMovies(params: any): Observable<any> {
        const url = `${this.peliculas}/pelicula`;
        return this.http.get(url, {headers: this.headders, params: params});
    }

    /*Metodo para agregar peliculas*/
    public addMovies(data): Observable<any> {
        const url = `${this.peliculas}/pelicula/create`;
        const info = JSON.stringify(data);
        return this.http.post(url, info, {headers: this.headders});
    }

    /*Metodo para eliminar peliculas*/
    public delMovies(id): Observable<any> {
        const url = `${this.peliculas}/pelicula/delete/${id}`;
        return this.http.delete(url, {headers: this.headders}).map(res => res);
    }

    /*Metodo para actualizar la infprmacion de las peliculas*/
/*    public updMovies(id, regs): Observable<any> {
        const url = `${this.peliculas}/pelicula/update`;
        const info = JSON.stringify(regs);
        return this.http.put(url, info, {headers: this.headders})
            .map(res => res);
    }*/

}
