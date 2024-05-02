import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './layout/display/login/login.component';
import { HomeComponent } from './layout/display/home/home.component';
import { LabLayoutComponent } from './layout/display/navbar/lab-layout/lab-layout.component';
import { CalendarioComponent } from './layout/display/navbar/lab-layout/calendario/calendario.component';
import { HorariosComponent } from './layout/display/navbar/lab-layout/calendario/horarios/horarios.component';
import { ApelarComponent } from './layout/display/apelar/apelar.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: "laboratorios", component: LabLayoutComponent, children: [
    {path: ":id/:nome/disponibilidade", component: CalendarioComponent, children: [
      {path: "horarios", component: HorariosComponent},
    ]},
  ]},
  {path: "apelar", component: ApelarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
