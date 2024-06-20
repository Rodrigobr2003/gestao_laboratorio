import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  router = inject(Router);

  aviso = faTriangleExclamation;

  next() {
    this.router.navigate(['/layout']);
  }
}
