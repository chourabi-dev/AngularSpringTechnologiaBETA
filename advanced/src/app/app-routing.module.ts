import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExpertiseComponent } from './expertise/expertise.component';
import { HistoireComponent } from './histoire/histoire.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { FavoritesPageComponent } from './pages/favorites-page/favorites-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';


const routes: Routes = [
  { path:'', redirectTo:'home', pathMatch:'full' },
  { path:'home' , component:HomePageComponent },


  { path:'about' , component:AboutPageComponent, children:[
      { path:'', redirectTo:'histoire', pathMatch:'full' },
      { path:'histoire'  , component:HistoireComponent },
      { path: 'nos-expertise' , component:ExpertiseComponent  }
  ] },


  { path:'favoris' , component:FavoritesPageComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
