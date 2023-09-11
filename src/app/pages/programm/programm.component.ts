import { Component } from '@angular/core';
import { Exercise } from 'src/app/models/exercise';
import { Day } from 'src/app/models/programm';
import { ExercisesDone } from 'src/app/models/user-exercise';
import { BottomTabsService } from 'src/app/services/bottom-tabs.service';
import { DbService } from 'src/app/services/db.service';
import { ExercisesService } from 'src/app/services/exercises.service';
import { ProgrammService } from 'src/app/services/programm.service';
import { UserExercisesService } from 'src/app/services/user-exercises.service';

@Component({
  selector: 'app-programm',
  templateUrl: './programm.component.html',
  styleUrls: ['./programm.component.css']
})
export class ProgrammComponent {

  progress: number = 0;
  dayStarted: boolean = false;
  currentDay: Day;
  finished: ExercisesDone;

  constructor(  
    private userExercises: UserExercisesService, 
    private service: ProgrammService, 
    private exercicesService: ExercisesService,
    bottomTabsService: BottomTabsService,
    private db: DbService
    ) {
      
    bottomTabsService.setActiveTab('programm');
    const ex = exercicesService.getExercises();
    this.finished = userExercises.getFinished();

    const total = ex.getAll().length;
    const current = this.finished.len();
    this.progress = Math.round(current / total * 100);

    const d = service.getCurrentDay();
    this.currentDay = d;
    this.dayStarted = db.getDayStarted();
   }

   setNotDone(ex: Exercise, event: MouseEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.userExercises.skip(ex);
    console.log('setNotDone', ex, this.currentDay.exercises);
   }

   setDone(ex: Exercise, event: MouseEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.userExercises.setDone(ex);
    console.log('setDone', ex);
   }

   finishExercises() {
    this.service.finishCurrentDay();
    this.currentDay = this.service.getCurrentDay();
    this.dayStarted = false;
    this.db.saveDayStarted(this.dayStarted);
   }

   startExercises() {
    this.currentDay = this.service.getCurrentDay();
    this.dayStarted = true;
    this.db.saveDayStarted(this.dayStarted);
   }

}
