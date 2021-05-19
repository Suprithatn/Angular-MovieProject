import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLogin;
  cartLength = 0;
  constructor(private movieService:MovieService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.isLogin = this.movieService.isLogin;
    this.cartLength = this.movieService.cart.length;
  }


  onLogout(){
    this.movieService.isLogin = false;
    this.router.navigate(['/login'], {relativeTo: this.route});
  }
}
