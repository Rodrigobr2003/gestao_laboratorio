import { Component } from '@angular/core';
import { faDesktop, faCalendarDays } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-horarios',
  templateUrl: './horarios.component.html',
  styleUrl: './horarios.component.css'
})
export class HorariosComponent {
  computador = faDesktop;
  calendario = faCalendarDays;

  monthAno : string [] = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
  "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
  ];

}
