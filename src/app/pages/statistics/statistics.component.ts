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

   restore(ex: Exercise, event: MouseEvent) {
    event.preventDefault();
    event.stopPropagation();
    if (!confirm('Отменить выполнение упражнения?\nВсе упражнения этой группы сделанные позже будут так же отменены')) {
      return;
    }
    console.log('restore', ex);
    if (this.userExercises.getFinished().isSkipped(ex)) {
      this.userExercises.removeFromDone(ex);
      this.service.finishCurrentDay();
    }
    if (this.userExercises.getFinished().isDone(ex)) {
      const group = ex.group;
      const levfl = ex.level;
      let next = ex
      while(true) {
        next = this.exercicesService.getExercises().getNext(next);
        if (this.userExercises.getFinished().isDone(next) || this.userExercises.getFinished().isSkipped(next)) {
          this.userExercises.removeFromDone(next);
        } else {
          break;
        }
      }
      this.userExercises.removeFromDone(ex);
      this.service.finishCurrentDay();
    }
   }
}
