import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrl: './calendario.component.css'
})
export class CalendarioComponent implements OnInit{

  id: number

  constructor(private route: ActivatedRoute){}

  ngOnInit(): void {
      this.id = this.route.snapshot.params['id']
  }

  calendario = faCalendarDays;

  monthAno : string [] = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
  "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
  ];
}
