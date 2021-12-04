import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { ExpertiseComponent } from './expertise/expertise.component';
import { HistoireComponent } from './histoire/histoire.component';
import { NotfoundComponent } from './page/notfound/notfound.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { FavoritesPageComponent } from './pages/favorites-page/favorites-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SigninComponent } from './pages/signin/signin.component';
import { UserComponent } from './pages/user/user.component';
import { UsersComponent } from './pages/users/users.component';


const routes: Routes = [
  {  path:'', redirectTo:'home', pathMatch:'full' },
  { canActivate:[ AuthGuard ] ,  path:'home' , component:HomePageComponent },
  { canActivate:[ AuthGuard ] ,  path:'about' , component:AboutPageComponent, children:[
      { path:'', redirectTo:'histoire', pathMatch:'full' },
      { path:'histoire'  , component:HistoireComponent },
      { path: 'nos-expertise' , component:ExpertiseComponent  }
  ] },
  {canActivate:[ AuthGuard ] ,  path:'favoris' , component:FavoritesPageComponent },
  {canActivate:[ AuthGuard ] ,  path:'users' , component:UsersComponent },
  //{ path:'user/:username/details' , component:UserComponent },
  {canActivate:[ AuthGuard ] ,  path:'user' , component:UserComponent },
  
  { path:'signin', component:SigninComponent },

  
  { path:'**' , component:NotfoundComponent },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
