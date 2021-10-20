import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesComponent } from './movies.component';
import { MovieInfoComponent } from './components/movie-info/movie-info.component';

const routes: Routes = [
  { path: '', component: MoviesComponent }
];

@NgModule({
  declarations: [
    MoviesComponent,
    MovieInfoComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MoviesRoutingModule,
    RouterModule.forChild(routes)
  ]
})
export class MoviesModule { }
