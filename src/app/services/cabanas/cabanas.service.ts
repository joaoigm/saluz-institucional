import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class CabanasService {

    constructor() {
        //
    }

    getCabanas(): any {
        return CABANAS_MOCK;
    }
}


const CABANAS_MOCK = {
    feminino: [
        {
            id: 1,
            vagasDisponiveis: 2
        },
        {
            id: 2,
            vagasDisponiveis: 1
        }
    ]
};
