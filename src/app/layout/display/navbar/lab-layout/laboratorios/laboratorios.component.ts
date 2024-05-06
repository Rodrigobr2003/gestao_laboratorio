import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-laboratorios',
  templateUrl: './laboratorios.component.html',
  styleUrl: './laboratorios.component.css'
})
export class LaboratoriosComponent {
  constructor(private router : Router, private route : ActivatedRoute){}

  lab: string []=[
    '../../../../../assets/Icone computador 1 svg.png',
    '../../../../../assets/Icone computador 2 svg.png',
    '../../../../../assets/Icone computador 3 svg.png',
    '../../../../../assets/Icone computador 4 svg.png',
    '../../../../../assets/Icone computador 5 svg.png',
    '../../../../../assets/Icone computador 6 svg.png'
  ];

  brightenImage(event: any) {
    event.target.classList.add('brighten');
  }

  resetBrightness(event: any) {
    event.target.classList.remove('brighten');
  }

  acessarLab(){
    this.router.navigate([ 1, "lab1" ,'disponibilidade'], {relativeTo: this.route})
  }
}
