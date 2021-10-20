import { Component, Inject } from '@angular/core';
import { MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';
import { Movies } from '../../models/movie.model';

@Component({
  selector: 'jj-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.scss']
})
export class MovieInfoComponent {

   movie: Movies;
  constructor(@Inject(MAT_BOTTOM_SHEET_DATA) public data: Movies, private _bottomSheetRef: MatBottomSheetRef<MovieInfoComponent> ) {
    this.movie = data;
   }
   
   close(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }

}
