import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/ranking', pathMatch: 'full' },
  { path: 'ranking', loadChildren: () => import('./ranking/ranking.module').then((m) => m.RankingModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
