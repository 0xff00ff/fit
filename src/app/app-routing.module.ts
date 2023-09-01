import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProgrammComponent } from './pages/programm/programm.component';
import { StatisticsComponent } from './pages/statistics/statistics.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { CurrentDayComponent } from './pages/current-day/current-day.component';

const routes: Routes = [
  {path: '', redirectTo: '/programm', pathMatch: 'full'},
  {path: 'programm', component: ProgrammComponent},
  {path: 'current-day', component: CurrentDayComponent},
  {path: 'statistics', component: StatisticsComponent},
  {path: 'profile', component: ProfileComponent},
  {path: '**', redirectTo: '/programm', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
