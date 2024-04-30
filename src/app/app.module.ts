import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeLayoutComponent } from './layout/home-layout/home-layout.component';
import { UserLayoutComponent } from './layout/user-layout/user-layout.component';
import { LabLayoutComponent } from './layout/lab-layout/lab-layout.component';
import { CalendarioComponent } from './layout/lab-layout/calendario/calendario.component';
import { HorariosComponent } from './layout/lab-layout/calendario/horarios/horarios.component';
import { ApelarComponent } from './layout/apelar/apelar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeLayoutComponent,
    UserLayoutComponent,
    LabLayoutComponent,
    CalendarioComponent,
    HorariosComponent,
    ApelarComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
