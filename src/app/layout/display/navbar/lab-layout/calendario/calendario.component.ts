import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})
export class CalendarioComponent implements OnInit {

  id: number;
  calendario = faCalendarDays;

  monthAno: string[] = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
  ];

  daysOfWeek = ['Seg', 'Ter', 'Quar', 'Quin', 'Sex'];
  startDate = new Date(2024, 0, 1);

  weeks: { date: string, day: string, isColorChanged: boolean }[][] = [];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.initializeDays();
  }

  initializeDays() {
    const currentDate = new Date(this.startDate);
    for (let i = 0; i < 4; i++) {
      const week: { date: string, day: string, isColorChanged: boolean }[] = [];
      for (let j = 0; j < this.daysOfWeek.length; j++) {
        const day = this.daysOfWeek[j];
        const date = `${('0' + currentDate.getDate()).slice(-2)}/${('0' + (currentDate.getMonth() + 1)).slice(-2)}`;
        week.push({ day, date, isColorChanged: false });
        currentDate.setDate(currentDate.getDate() + 1);
      }
      this.weeks.push(week);
    }
  }

  changeColor(day: { date: string, day: string, isColorChanged: boolean }) {
    day.isColorChanged = !day.isColorChanged;
  }
}
