import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})
export class CalendarioComponent implements OnInit {

  @ViewChild('monthSelect') monthSelect: ElementRef;

  id: number;
  calendario = faCalendarDays;

  monthAno: string[] = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
  ];

  times = [1, 2, 3, 4];

  daysOfWeek = ['Seg', 'Ter', 'Quar', 'Quin', 'Sex'];
  startDate = new Date(2024, 0, 1);

  weeks: { date: string, day: string, isColorChanged: boolean }[][] = [];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.initializeDays();
  }

  ngAfterViewInit(): void {
    this.monthSelect.nativeElement.value = this.startDate.getMonth();
    this.monthSelect.nativeElement.addEventListener('change', () => this.onMonthChange());
  }

  onMonthChange(): void {
    const selectedMonth = this.monthSelect.nativeElement.value;
    this.startDate.setMonth(selectedMonth);
    this.initializeDays();
  }

  initializeDays() {
    this.weeks = []; 
    const currentDate = new Date(this.startDate);
    const numWeeks = 4;  
    const daysPerWeek = this.daysOfWeek.length;

    for (let i = 0; i < numWeeks; i++) {
      const week: { date: string, day: string, isColorChanged: boolean }[] = [];

      for (let j = 0; j < daysPerWeek; j++) {
        const day = this.daysOfWeek[j];
        const date = this.formatDate(currentDate);
        week.push({ day, date, isColorChanged: false });
        currentDate.setDate(currentDate.getDate() + 1);
      }
      currentDate.setDate(currentDate.getDate() + 2);
      this.weeks.push(week);
    }
  }

  private formatDate(date: Date): string {
    const day = ('0' + date.getDate()).slice(-2);
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    return `${day}/${month}`;
  }

  changeColor(day: { date: string, day: string, isColorChanged: boolean }) {
    day.isColorChanged = !day.isColorChanged;
  }
}
