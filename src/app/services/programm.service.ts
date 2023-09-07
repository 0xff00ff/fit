import { Injectable } from '@angular/core';
import { ExercisesService } from './exercises.service';
import { Level, Options } from '../models/options';
import { Day } from '../models/programm';
import { ExercisesDone, UserExercise } from '../models/user-exercise';
import { UserExercisesService } from './user-exercises.service';
import { DbService } from './db.service';

@Injectable({
  providedIn: 'root'
})
export class ProgrammService {

  currentDay: Day = new Day();
  programm: Day[] = [];
  dayIndex: number = 1;
  dayIndexes: number = 1;

  constructor(
    readonly exercisesService: ExercisesService, 
    readonly userExercisesService: UserExercisesService,
    private db: DbService) { 
    this.generateProgramm();
  }

  generateProgramm() {
    const programm = this.db.getProgramm();
    if (programm) {
      this.programm = programm;
    } else {
      this.programm = this._getProgramm(this.userExercisesService.getOptions(), this.userExercisesService.getFinished());
      // localStorage.setItem('programm', JSON.stringify(this.programm));
      this.db.saveProgramm(this.programm);
    }
    const rawCurrentDay = this.db.getCurrentDay();
    if (rawCurrentDay) {
      this.currentDay = rawCurrentDay
    } else {
      this.currentDay = this._getCurrentDay(this.userExercisesService.getOptions(), this.userExercisesService.getFinished());
      // localStorage.setItem('currentDay', JSON.stringify(this.currentDay));
      this.db.saveCurrentDay(this.currentDay);
    }
  }

  finishCurrentDay() {
    this.dayIndex++;
    if (this.dayIndex > this.dayIndexes) {
      this.dayIndex = 1;
    }
    this.db.clearCurrentDay();
    // localStorage.removeItem('programm')
    this.userExercisesService.clearUnfinished();
    this.generateProgramm();
  }

  getCurrentDay() {
    return this.currentDay;
  }

  getProgramm(): Day[] {
    return this.programm;
  }

  private _getCurrentDay(options: Options, done: ExercisesDone) {
    const ex = this.exercisesService.getExercises();
    const programm = this.getProgramm();
    const day = new Day();
    for (let q of programm || []) {
      if (q.done) {
        continue;
      }
      if (q.index !== this.dayIndex) {
        continue;
      }
      for (let w = 0; w < q.exercises.length; w++) {
        let d = done.isDone(q.exercises[w])
        if (!d) {
          day.exercises.push(q.exercises[w]);
          continue;
        }
        let next = ex.getNext(q.exercises[w]);
        d = done.isDone(next);
        let counter = 1000
        while (d && counter > 0) {
          counter--;
          next = ex.getNext(next);
          if (!next) {
            break;
          }
          d = done.isDone(next);
        }
        if (next) {
        day.exercises.push(next)
        }
      }
      break;
    }
    return day;
  }

  private _getProgramm(options: Options, finished: ExercisesDone): Day[] {
    switch (options.level) {
      case Level.Beginner:
        this.dayIndexes = 3;
        return this.getBeginnerProgramm();
      case Level.Intermediate:
        this.dayIndexes = 2;
        return this.getIntermediateProgramm();
      case Level.Advanced:
        this.dayIndexes = 1;
        return this.getAdvancedProgramm();
      default:
        return this.getBeginnerProgramm();
    }
  }

  // day 1: legs, shoulders
  // day 2: press, back
  // day 3: pullups, pushups
  // repeat
  private getBeginnerProgramm() {
    const ex = this.exercisesService.getExercises();
    const days: Day[] = [];
    const levels = ex.getLevels();
    for (let i = 1; i <= levels; i++) {
      days.push(new Day([ex.getLegs().getLevel(i), ex.getShoulders().getLevel(i)], 1));
      days.push(new Day([ex.getPress().getLevel(i), ex.getBack().getLevel(i)], 2));
      days.push(new Day([ex.getPullUps().getLevel(i), ex.getPushUps().getLevel(i)], 3));
    }
    console.log(days);
    return days;
  }

  // day 1: legs, shoulders, press
  // day 2: back, pullups, pushups
  // repeat
  private getIntermediateProgramm() {
    const ex = this.exercisesService.getExercises();
    const days: Day[] = [];
    const levels = ex.getLevels();
    for (let i = 1; i <= levels; i++) {
      days.push(new Day([ex.getLegs().getLevel(i), ex.getShoulders().getLevel(i), ex.getPress().getLevel(i)], 1));
      days.push(new Day([ex.getBack().getLevel(i), ex.getPullUps().getLevel(i), ex.getPushUps().getLevel(i)], 2));
    }
    return days;
  }

  // day 1: all exercises
  // repeat
  private getAdvancedProgramm() {
    const ex = this.exercisesService.getExercises();
    const days: Day[] = [];
    const levels = ex.getLevels();
    for (let i = 1; i <= levels; i++) {
      days.push(new Day([ex.getLegs().getLevel(i), ex.getShoulders().getLevel(i), ex.getPress().getLevel(i), ex.getBack().getLevel(i), ex.getPullUps().getLevel(i), ex.getPushUps().getLevel(i)]));
    }
    return days;
  }
  
  clearProgramm() {
    this.db.clearProgramm();
    this.db.clearCurrentDay();
    this.generateProgramm();
  }
}

