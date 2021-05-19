import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {
  @ViewChild('movieForm', {static:false}) movieForm:NgForm;
  movieObject:any;
  lastmovieId:number;

  constructor(private movieService:MovieService, private router:Router,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.movieService.checkLogin();
    this.movieObject = this.movieService.movieDetails;
    this.lastmovieId = this.movieObject[Object.keys(this.movieObject)[Object.keys(this.movieObject).length - 1]].movieid;
    
  }

  onSubmit(form:NgForm){
    this.movieService.addMovie(form.value);
    this.onCancel();
  }

  onCancel(){
    this.router.navigate(['/list'], {relativeTo: this.route});
  }


  onDelete(index:number){
    this.movieService.movieDetails.splice(index, 1);
  }
}
