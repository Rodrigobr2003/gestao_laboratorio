import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeLayoutComponent } from './layout/display/home-layout/home-layout.component';
import { UserLayoutComponent } from './layout/display/user-layout/user-layout.component';
import { LabLayoutComponent } from './layout/display/navbar/lab-layout/lab-layout.component';
import { ApelarComponent } from './layout/display/apelar/apelar.component';
import { DisplayComponent } from './layout/display/display.component';
import { NavbarComponent } from './layout/display/navbar/navbar.component';
import { CalendarioComponent } from './layout/display/navbar/lab-layout/calendario/calendario.component';
import { HorariosComponent } from './layout/display/navbar/lab-layout/calendario/horarios/horarios.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeLayoutComponent,
    UserLayoutComponent,
    LabLayoutComponent,
    ApelarComponent,
    DisplayComponent,
    NavbarComponent,
    CalendarioComponent,
    HorariosComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
