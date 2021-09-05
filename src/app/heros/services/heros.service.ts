import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hero } from '../interfaces/hero.interface';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HerosService {

  private baseUrl:string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getHeros(): Observable<Hero[]> {
    return this.http.get<Hero[]>(`${this.baseUrl}/heroes`);
  }

  getHeroePorId( id:string ):Observable<Hero> {
    return this.http.get<Hero>(`${this.baseUrl}/heroes/${id}`);
  }

  getSugerencias(termino:string): Observable<Hero[]>{
    return this.http.get<Hero[]>(`${this.baseUrl}/heroes?q=${termino}&limit=6`)
  }

  agregarHeroe(heroe: Hero): Observable<Hero>{
    return this.http.post<Hero>(`${this.baseUrl}/heroes`, heroe);
  }

  actualizarHeroe(heroe: Hero): Observable<Hero>{
    return this.http.put<Hero>(`${this.baseUrl}/heroes/${heroe.id}`, heroe);
  }

  borrarHeroe(id:string): Observable<any>{
    return this.http.delete<any>(`${this.baseUrl}/heroes/${id}`);    
  }
}
