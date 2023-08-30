import { Component } from '@angular/core';
import { Exercise } from 'src/app/models/exercise';
import { Day } from 'src/app/models/programm';
import { ExercisesDone } from 'src/app/models/user-exercise';
import { BottomTabsService } from 'src/app/services/bottom-tabs.service';
import { ExercisesService } from 'src/app/services/exercises.service';
import { ProgrammService } from 'src/app/services/programm.service';
import { UserExercisesService } from 'src/app/services/user-exercises.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent {
  progress: number = 0;
  programm: Day[];
  currentDay: Day;
  finished: ExercisesDone;

  constructor(
    private userExercises: UserExercisesService, 
    private service: ProgrammService, 
    private exercicesService: ExercisesService,
    bottomTabsService: BottomTabsService
    ) {
      
    bottomTabsService.setActiveTab('statistics');
    const ex = exercicesService.getExercises();
    this.finished = userExercises.getFinished();

    const total = ex.getAll().length;
    const current = this.finished.len();
    this.progress = Math.round(current / total * 100);
    console.log(this.progress);

    const d = service.getCurrentDay();
    this.currentDay = d;
    const p = service.getProgramm();
    this.programm = p;
   }

   setNotDone(ex: Exercise) {
    this.userExercises.skip(ex);
    console.log('setNotDone', ex, this.currentDay.exercises);
   }

   setDone(ex: Exercise) {
    this.userExercises.setDone(ex);
    console.log('setDone', ex);
   }

   finishExercises() {
    this.service.finishCurrentDay();
    // this.programm = this.service.getProgramm();
    this.currentDay = this.service.getCurrentDay();
   }
}