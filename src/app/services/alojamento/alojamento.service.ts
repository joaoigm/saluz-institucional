import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AlojamentoService {

    constructor() {
        //
    }

    getAlojamentoFeminino(): any {
        return ALOJAMENTO_FEMININO_MOCK;
    }
}

const ALOJAMENTO_FEMININO_MOCK = {
    vagasDisponiveis: 17,
    camaA: [
        { cama: 1, disponivel: true },
        { cama: 2, disponivel: true },
        { cama: 3, disponivel: true },
        { cama: 4, disponivel: true },
        { cama: 5, disponivel: true },
        { cama: 6, disponivel: true },
        { cama: 7, disponivel: true },
        { cama: 8, disponivel: true },
        { cama: 9, disponivel: true },
    ],
    camaB: [
        { cama: 1, disponivel: true },
        { cama: 2, disponivel: true },
        { cama: 3, disponivel: true },
        { cama: 4, disponivel: true },
        { cama: 5, disponivel: true },
        { cama: 6, disponivel: true },
        { cama: 7, disponivel: true },
        { cama: 8, disponivel: true },
    ]
};
