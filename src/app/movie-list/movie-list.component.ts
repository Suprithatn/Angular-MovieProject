import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movieList:any;
  isLogin;


  constructor(private movieService:MovieService) { }

  ngOnInit(): void {
    this.movieService.checkLogin();
    this.movieList = this.movieService.movieDetails;
  }

  onAddToCart(index:number){
    this.movieService.addToCart(index);
    alert("Added to cart Successfully!");
  }

}
