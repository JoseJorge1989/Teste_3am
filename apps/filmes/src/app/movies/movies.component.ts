import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { Observable } from 'rxjs';
import { MovieInfoComponent } from './components/movie-info/movie-info.component';
import { Movies } from './models/movie.model';
import { MovieService } from './services/movie.service';

@Component({
  selector: 'jj-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  changeText: boolean;
  movies$!: Observable<Movies[]>;
  constructor(private moviceService: MovieService, private _bottomSheet: MatBottomSheet) {
    this.changeText = false;
   }

  ngOnInit(): void {
    this.moviceService.getMovies().subscribe(console.log)
    this.movies$ = this.moviceService.getMovies();
  }
  openBottomSheet(movie:Movies): void {
    console.log("ok")
    this._bottomSheet.open(MovieInfoComponent, {data:movie});
  }


}
