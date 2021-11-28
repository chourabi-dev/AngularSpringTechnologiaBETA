import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { BlocArticlesComponent } from './bloc-articles/bloc-articles.component';
import { ArticleComponent } from './article/article.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { FavoritesPageComponent } from './pages/favorites-page/favorites-page.component';
import { HistoireComponent } from './histoire/histoire.component';
import { ExpertiseComponent } from './expertise/expertise.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidemenuComponent,
    BlocArticlesComponent,
    ArticleComponent,
    HomePageComponent,
    AboutPageComponent,
    FavoritesPageComponent,
    HistoireComponent,
    ExpertiseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
