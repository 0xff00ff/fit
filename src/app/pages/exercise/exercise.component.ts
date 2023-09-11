import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Exercise } from 'src/app/models/exercise';
import { Day } from 'src/app/models/programm';
import { ExercisesDone } from 'src/app/models/user-exercise';
import { ExercisesService } from 'src/app/services/exercises.service';
import { ProgrammService } from 'src/app/services/programm.service';
import { UserExercisesService } from 'src/app/services/user-exercises.service';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.css']
})
export class ExerciseComponent {

  exercise: Exercise;
  backUrl: string = '/programm';

  constructor(
    private service: ExercisesService, 
    private route: ActivatedRoute,
    private router: Router,
    
    ) {
    
    const exerciseId = parseInt(this.route.snapshot.paramMap.get('id') || '0');
    const back = this.route.snapshot.paramMap.get('back');
    if (back === 's') {
      this.backUrl = '/statistics';
    }
    this.exercise = service.getById(exerciseId);
  
  }

}
