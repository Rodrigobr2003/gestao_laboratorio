import { Location } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import {
  faArrowLeftLong,
  faHeadset,
  faFilePen,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  arrowLeftLong = faArrowLeftLong;
  headset = faHeadset;
  filePen = faFilePen;

  router = inject(Router);
  location = inject(Location);

  navegarApelo() {
    this.router.navigate(['/layout/apelar']);
  }

  retornar() {
    this.location.back();
  }
}
