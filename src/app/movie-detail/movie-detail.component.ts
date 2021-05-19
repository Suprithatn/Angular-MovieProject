import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  movieId:number;
  public movieDetail:any;
  isLogin;
  constructor(private route:ActivatedRoute, private movieService:MovieService) { }

  ngOnInit(): void {
    this.movieService.checkLogin();
    this.route.params.subscribe(
      (params:Params) => {
        this.movieId = +params['id'];
        this.movieDetail = this.movieService.getMovie(this.movieId);
      }
    );
  }

  onAddToCart(movieId:number){
    this.movieService.addMovieToCart(movieId);
    alert("Added to Cart Successfully");
  }

}
