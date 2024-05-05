import { Component } from '@angular/core';

@Component({
  selector: 'app-lab-layout',
  templateUrl: './lab-layout.component.html',
  styleUrls: ['./lab-layout.component.css']
})
export class LabLayoutComponent {

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
}
