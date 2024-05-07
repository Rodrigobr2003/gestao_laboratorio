import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-lab-layout',
  templateUrl: './lab-layout.component.html',
  styleUrls: ['./lab-layout.component.css']
})
export class LabLayoutComponent implements OnInit{

  constructor(private router: Router, private route: ActivatedRoute){}

  ngOnInit(): void {
      this.router.navigate(['laboratorios'], {relativeTo: this.route})
  }

}
