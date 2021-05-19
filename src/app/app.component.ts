import { Component, OnInit } from '@angular/core';
import { MovieService } from './movie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angular-project';
  isLogin;
  constructor(private movieService: MovieService){}

  ngOnInit(){
    this.isLogin = this.movieService.isLogin;
  }
}
