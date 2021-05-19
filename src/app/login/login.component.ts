import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  defaultEmail:string = 'user@test.com';
  defaultPassword:string = '1234';

  constructor(private route:ActivatedRoute, private router:Router, private movieService:MovieService) { }

  ngOnInit(): void {
    this.movieService.checkLogin();
  }

  onSubmit(form:NgForm){
    if( (form.value['email'] === this.defaultEmail) && (form.value['password'] === this.defaultPassword)){
      this.router.navigate(['/home'], {relativeTo: this.route});
      this.movieService.isLogin = true;
      console.log(this.movieService.isLogin);
    } else {
      alert("Wrong Username and Password");
      this.router.navigate(['/login'], {relativeTo: this.route});
      form.reset();
    }
  }

}
