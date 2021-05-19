import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartDetails:any;
  isLogin;

  constructor(private movieService:MovieService) { }

  ngOnInit(): void {
    this.movieService.checkLogin();
    this.cartDetails = this.movieService.cart;
  }

  onRemove(index:number){
    this.movieService.removeFromCart(index);
  }

}
