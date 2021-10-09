import { Component, OnInit } from '@angular/core';
import { AlojamentoService } from 'src/app/services/alojamento/alojamento.service';
import { Alojamento } from 'src/app/types/types';

@Component({
    selector: 'app-alojamento-feminino',
    templateUrl: './alojamento-feminino.component.html',
    styleUrls: ['./alojamento-feminino.component.scss'],
})
export class AlojamentoFemininoComponent implements OnInit {
    alojamento?: Alojamento;

    constructor(
        private alojamentoService: AlojamentoService
    ) {
        //
    }
    ngOnInit(): void {
        this.alojamento = this.alojamentoService.getAlojamentoFeminino();
    }
}
