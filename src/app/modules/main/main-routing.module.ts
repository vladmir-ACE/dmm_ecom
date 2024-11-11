import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MainComponent } from './main.component';
import { OrderComponent } from './pages/order/order.component';

const routes: Routes = [

  {path:'',component:MainComponent,

    children:[
      {path:'',redirectTo:"/home",pathMatch:'full'},
      {path:'home',component:HomeComponent},
      {path:'order',component:OrderComponent},
    
]}]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
