import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movies } from '../models/movie.model';
import{map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
   
  constructor(private _http: HttpClient) { }

   getMovies():Observable<Movies[]>{ 

     return this._http.get("assets/movies.json").pipe(map((data: any)=>{
       return data.movies
     }))
   }
}
