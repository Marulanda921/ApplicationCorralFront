import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { CreateCorralComponent } from './Components/create-corral/create-corral.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'create-corral', component: CreateCorralComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
