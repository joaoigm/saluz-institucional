import { Component, OnInit } from '@angular/core';
import { CabanasService } from '../services/cabanas/cabanas.service';

@Component({
    selector: 'app-comprar-ingresso',
    templateUrl: './comprar-ingresso.component.html',
    styleUrls: ['./comprar-ingresso.component.scss']
})
export class ComprarIngressoComponent implements OnInit {

  cabanas: any;
  constructor(
    private cabanaService: CabanasService
  ) { }

  ngOnInit(): void {
      this.cabanas = this.cabanaService.getCabanas();
  }

}
