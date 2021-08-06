import { Component, HostListener, OnInit } from '@angular/core';
import { multi } from './mock-data';

@Component({
  selector: 'app-mensal-chart',
  templateUrl: './mensal-chart.component.html',
})
export class MensalChartComponent implements OnInit {
  screenWidth: any;
  screenHeight: any;
  multi: any;
  // options

  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Semanas';
  showYAxisLabel = true;
  yAxisLabel = 'Pontuação';
  view: [number, number] = [700, 400]

  colorScheme = {
    domain: ['#051afc', '#e81010'],
  };
  constructor() {
    Object.assign(this, { multi });
  }

  onSelect(event: any) {
    console.log(event);
  }

  ngOnInit() {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;

    this.view = [ this.screenWidth * 0.8, this.screenHeight * 0.5]
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;

    this.view = [ this.screenWidth * 0.8, this.screenHeight * (this.screenHeight > 470 ? 0.5 : 0.2)]
  }
}
