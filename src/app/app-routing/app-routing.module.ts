import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { ComprarIngressoComponent } from '../comprar-ingresso/comprar-ingresso.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },{
    path: 'comprar-ingresso', component: ComprarIngressoComponent
  }
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
