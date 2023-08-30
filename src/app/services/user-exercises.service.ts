import { Injectable } from '@angular/core';
import { ProgrammService } from './programm.service';
import { ExercisesDone } from '../models/user-exercise';
import { Level, Options } from '../models/options';
import { Exercise } from '../models/exercise';

@Injectable({
  providedIn: 'root'
})
export class UserExercisesService {

  exercisesDone: ExercisesDone = new ExercisesDone();
  options: Options = new Options(Level.Beginner);

  constructor() {
    const data = localStorage.getItem('exercisesDone');
    if (data) {
      const exercisesRaw = JSON.parse(data);
      for (let id in exercisesRaw.exercises) {
        const done = exercisesRaw.exercises[id];
        this.exercisesDone.add(parseInt(id), done);
      }
    }
    const optionsRaw = localStorage.getItem('options');
    if (optionsRaw) {
      const opt = JSON.parse(optionsRaw);
      this.options = Options.restore(opt);
    }
   }

  setDone(ex: Exercise) {
    this.exercisesDone.done(ex);
    this.save();
  }

  skip(ex: Exercise) {
      this.exercisesDone.skip(ex);
      this.save();
  }

  removeFromDone(ex: Exercise) {
    this.exercisesDone.remove(ex);
    this.save();
  }

  getFinished() {
    return this.exercisesDone;
  }

  getOptions() {
    return this.options;
  }

  setOptions(options: Options) {
    this.options = options;
    this.save();
  }

  save() {
    localStorage.setItem('exercisesDone', JSON.stringify(this.exercisesDone));
    localStorage.setItem('options', JSON.stringify(this.options));
  }

  clearUnfinished() {
    this.exercisesDone.clearUnfinished();
  }
}
