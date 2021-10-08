import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComprarIngressoRoutingModule } from './comprar-ingresso-routing.module';
import { ComprarIngressoComponent } from './comprar-ingresso.component';
import { CabanaMasculinoComponent } from './cabana-masculino/cabana-masculino.component';
import { CabanaFemininoComponent } from './cabana-feminino/cabana-feminino.component';
import { AlojamentoMasculinoComponent } from './alojamento-masculino/alojamento-masculino.component';
import { AlojamentoFemininoComponent } from './alojamento-feminino/alojamento-feminino.component';
import { RouterModule } from '@angular/router';


@NgModule({
    declarations: [
        ComprarIngressoComponent,
        CabanaMasculinoComponent,
        CabanaFemininoComponent,
        AlojamentoMasculinoComponent,
        AlojamentoFemininoComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        ComprarIngressoRoutingModule
    ]
})
export class ComprarIngressoModule { }
