import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { MensalChartComponent } from './mensal-chart/mensal-chart.component';
import { RankingRoutingModule } from './ranking-routing.module';
import { RankingComponent } from './ranking.component';

@NgModule({
  declarations: [
    RankingComponent,
    MensalChartComponent
  ],
  imports: [
    CommonModule,
    RankingRoutingModule,
    NgxChartsModule
  ]
})
export class RankingModule { }
