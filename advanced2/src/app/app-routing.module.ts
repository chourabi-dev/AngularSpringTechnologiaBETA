import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddUserComponent } from './pages/add-user/add-user.component';
import { HomeComponent } from './pages/home/home.component';
import { ServerCallComponent } from './pages/server-call/server-call.component';
import { UserComponent } from './pages/user/user.component';


const routes: Routes = [
  { path:'', component:HomeComponent },
  { path:'home', component:HomeComponent },
  { path:'user/:id', component:UserComponent },
  { path:'hoem/user/add', component:AddUserComponent },
  { path:'server/users', component:ServerCallComponent }
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
