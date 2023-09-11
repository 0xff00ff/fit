import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProgrammComponent } from './pages/programm/programm.component';
import { StatisticsComponent } from './pages/statistics/statistics.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ExerciseComponent } from './pages/exercise/exercise.component';

const routes: Routes = [
  {path: '', redirectTo: '/programm', pathMatch: 'full'},
  {path: 'programm', component: ProgrammComponent},
  {path: 'statistics', component: StatisticsComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'exercise/:id/:back', component: ExerciseComponent},
  {path: '**', redirectTo: '/programm', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
