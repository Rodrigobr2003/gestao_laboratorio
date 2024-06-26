import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './layout/display/home/home.component';
import { LabLayoutComponent } from './layout/display/navbar/lab-layout/lab-layout.component';
import { ApelarComponent } from './layout/display/apelar/apelar.component';
import { DisplayComponent } from './layout/display/display.component';
import { NavbarComponent } from './layout/display/navbar/navbar.component';
import { CalendarioComponent } from './layout/display/navbar/lab-layout/calendario/calendario.component';
import { HorariosComponent } from './layout/display/navbar/lab-layout/calendario/horarios/horarios.component';
import { LoginComponent } from './layout/display/login/login.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LaboratoriosComponent } from './layout/display/navbar/lab-layout/laboratorios/laboratorios.component';
import { BrightnessLabDirective } from './layout/display/navbar/lab-layout/laboratorios/brightness-lab.directive';

@NgModule({
  declarations: [
    AppComponent,
    LabLayoutComponent,
    ApelarComponent,
    DisplayComponent,
    NavbarComponent,
    CalendarioComponent,
    HorariosComponent,
    HomeComponent,
    LoginComponent,
    LaboratoriosComponent,
    BrightnessLabDirective,
  ],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
