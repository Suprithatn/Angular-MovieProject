import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  movieAdded = new Subject<{}>();
  isLogin = false;
  cart:any[] = [];
  addedToCart = new Subject<{}[]>();

  movieDetails = [
    {"movieid":101, "moviename":"Roohi", "productionname":"Jio Studios","movieType":"Horror - Comedy", "director":"Hardik Mehta", "cast1":"Rajkumar Rao", "cast2":"Jahnvi Kapoor","language":"Hindi","poster":"https://www.glamsham.com/wp-content/uploads/2021/03/Rajkummar-Rao-Janhvi-Kapoor-Varun-Sharma-starrer-Roohi-Movie-Poster.jpg"},
    {"movieid":102, "moviename":"Mumbai Saga", "productionname":"T-Series","movieType":"Action",
    "director":"Sanjay Gupta", "cast1":"John Abraham", "cast2":"Kajal Aggarwal","language":"Hindi","poster":"https://cdn.bollywoodmdb.com/movies/largethumb/2014/mumbai-saga/mumbai-saga-poster-7.jpg"},
    {"movieid":201, "moviename":"Krack", "productionname":"Saraswathi film Divison","movieType":"Action", "director":"Gopichand", "cast1":"Ravi Teja", "cast2":"Shruti Haasan","language":"Telugu","poster":"https://www.filmibeat.com/ph-big/2019/11/krack_157370882600.jpg"},
    {"movieid":202, "moviename":"Uppena", "productionname":"Mythiri Movie Makers","movieType":"Romance", "director": "Bucci Babu", "cast1":"Panja Vaishnav Tej", "cast2":"Kriti Shetty","language":"Telugu","poster":"https://files.prokerala.com/movies/pics/800/uppena-movie-new-poster-released-on-the-occasion-of-powerstar-pawan-kalyan-s-birthday-114534.jpg"}
    
    ]

  constructor(private router:Router, private route:ActivatedRoute) {}

  checkLogin(){
    if(!this.isLogin){
      this.router.navigate(['/login'], {relativeTo: this.route});
    }
  }

  getMovie(movieid:number){
    const movieInfo = this.movieDetails.find(
        (s) => {
        return s.movieid === movieid;
        }
    );
    return movieInfo;
  }

  addToCart(index:number){
    this.cart.push({
      'movieid': this.movieDetails[index].movieid,
      'moviename': this.movieDetails[index].moviename,
      'productionname': this.movieDetails[index].productionname,
      'movieType': this.movieDetails[index].movieType,
      'director': this.movieDetails[index].director,
      'cast1': this.movieDetails[index].cast1,
      'cast2': this.movieDetails[index].cast2,
      'language': this.movieDetails[index].language,
      'poster': this.movieDetails[index].poster
    });
    this.addedToCart.next(this.cart.slice());
  }

  removeFromCart(index:number){
    this.cart.splice(index, 1);
    this.addedToCart.next(this.cart.slice());
  }

  addMovieToCart(movieId:number){
    this.cart.push({
      'movieid': movieId,
      'moviename': this.movieDetails.find(x => x.movieid === movieId).moviename,
      'productionname': this.movieDetails.find(x => x.movieid === movieId).productionname,
      'movieType': this.movieDetails.find(x => x.movieid === movieId).movieType,
      'director': this.movieDetails.find(x => x.movieid === movieId).director,
      'cast1': this.movieDetails.find(x => x.movieid === movieId).cast1,
      'cast2': this.movieDetails.find(x => x.movieid === movieId).cast2,
      'language': this.movieDetails.find(x => x.movieid === movieId).language,
      'poster': this.movieDetails.find(x => x.movieid === movieId).poster
    });
    this.addedToCart.next(this.cart.slice());
  }

  addMovie(movie:any){
    this.movieDetails.push(movie);
    this.movieAdded.next(this.movieDetails.slice());
  }

}
