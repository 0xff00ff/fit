import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Exercise } from 'src/app/models/exercise';
import { Day } from 'src/app/models/programm';
import { ExercisesDone } from 'src/app/models/user-exercise';
import { ProgrammService } from 'src/app/services/programm.service';
import { UserExercisesService } from 'src/app/services/user-exercises.service';

@Component({
  selector: 'app-current-day',
  templateUrl: './current-day.component.html',
  styleUrls: ['./current-day.component.css']
})
export class CurrentDayComponent {

  day:Day;
  exerciseIndex: number;
  exercise: Exercise;
  finished: ExercisesDone;

  constructor(
    private programmService: ProgrammService, 
    private route: ActivatedRoute,
    private router: Router,
    private userExercises: UserExercisesService, 
    private service: ProgrammService
    ) {
    this.exerciseIndex = parseInt(this.route.snapshot.paramMap.get('index') || '0');
    this.day = programmService.getCurrentDay();
    this.exercise = this.day.exercises[this.exerciseIndex];
    this.finished = userExercises.getFinished();
  }

  prev() {
    if (this.exerciseIndex > 0) {
      this.exerciseIndex--;
      this.exercise = this.day.exercises[this.exerciseIndex];
    }

  }

  next() {
    if (this.exerciseIndex < this.day.exercises.length - 1) {
      this.exerciseIndex++;
      this.exercise = this.day.exercises[this.exerciseIndex];
    }
  }

  setDone(ex:Exercise, $event: MouseEvent) {
    this.userExercises.setDone(ex);
  }

  setNotDone(ex:Exercise, $event: MouseEvent) {
    this.userExercises.skip(ex);
  }

  finishExercises() {
    this.service.finishCurrentDay();
    this.router.navigate(['/programm']);
  }
}
