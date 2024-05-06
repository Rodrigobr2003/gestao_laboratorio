import { Component } from '@angular/core';

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
}
