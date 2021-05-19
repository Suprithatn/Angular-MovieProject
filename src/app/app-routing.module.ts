import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path :'', component: LoginComponent},
  {path :'login', component: LoginComponent},
  {path :'home', component: HomeComponent},
  {path: 'list', component: MovieListComponent},
  {path :'list/:id', component: MovieDetailComponent},
  {path: 'cart', component: CartComponent},
  {path: 'contact-us', component: ContactUsComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
