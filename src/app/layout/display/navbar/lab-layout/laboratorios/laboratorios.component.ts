import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LaboratoriosService } from '../laboratorios.service';

@Component({
  selector: 'app-laboratorios',
  templateUrl: './laboratorios.component.html',
  styleUrl: './laboratorios.component.css',
})
export class LaboratoriosComponent implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private labsSrv: LaboratoriosService
  ) {}

  listaLabs: { id: number; nome: string; img: string }[] = [];

  ngOnInit(): void {
    this.listaLabs = this.labsSrv.getLabs();
  }

  brightenImage(event: any) {
    event.target.classList.add('brighten');
  }

  resetBrightness(event: any) {
    event.target.classList.remove('brighten');
  }

  acessarLab() {
    this.router.navigate([1, 'lab1', 'disponibilidade'], {
      relativeTo: this.route,
    });
  }
}
