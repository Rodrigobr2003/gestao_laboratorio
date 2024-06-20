import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LaboratoriosService } from './laboratorios.service';

@Component({
  selector: 'app-laboratorios',
  templateUrl: './laboratorios.component.html',
  styleUrl: './laboratorios.component.css',
})
export class LaboratoriosComponent implements OnInit {
  listaLabs: { id: number; nome: string; img: string }[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private labSrv: LaboratoriosService
  ) {}

  ngOnInit(): void {
    this.listaLabs = this.labSrv.getLabs();
  }

  acessarLab(id): void {
    this.router.navigate(['../', id, 'lab' + id, 'disponibilidade'], {
      relativeTo: this.route
    });
  }
}
