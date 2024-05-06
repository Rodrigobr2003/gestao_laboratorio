import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LaboratoriosService {
  listaLabs: { id: number; nome: string; img: string }[] = [
    {
      id: 1,
      nome: 'lab1',
      img: '../../../../../assets/Icone computador 1 svg.png',
    },
    {
      id: 2,
      nome: 'lab2',
      img: '../../../../../assets/Icone computador 2 svg.png',
    },
    {
      id: 3,
      nome: 'lab3',
      img: '../../../../../assets/Icone computador 3 svg.png',
    },
    {
      id: 4,
      nome: 'lab4',
      img: '../../../../../assets/Icone computador 4 svg.png',
    },
    {
      id: 5,
      nome: 'lab5',
      img: '../../../../../assets/Icone computador 5 svg.png',
    },
    {
      id: 6,
      nome: 'lab6',
      img: '../../../../../assets/Icone computador 6 svg.png',
    },
  ];

  constructor() {}

  getLabs() {
    return this.listaLabs.slice();
  }
}
