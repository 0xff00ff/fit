import { Injectable } from '@angular/core';
import { ExercisesDone } from '../models/user-exercise';
import { Options } from '../models/options';
import { Day, Programm } from '../models/programm';
import { NavigationCancellationCode } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  readonly programmKey = 'programm';
  readonly currentDayKey = 'currentDay';
  readonly exercisesDoneKey = 'exercisesDone';
  readonly optionsKey = 'options';


  constructor() { }

  saveProgramm(programm: any) {
    localStorage.setItem(this.programmKey, JSON.stringify(programm));
  }

  getProgramm(): Day[] | null {
    const rawProgramm = localStorage.getItem(this.programmKey);
    if (rawProgramm) {
      const programm = JSON.parse(rawProgramm);
      const days = programm.map((d: any) => Day.fill(d));
      return days;
    }
    
    return null;
  }

  clearProgramm() {
    localStorage.removeItem(this.programmKey);
  }

  saveCurrentDay(currentDay: any) {
    localStorage.setItem(this.currentDayKey, JSON.stringify(currentDay));
  }

  getCurrentDay(): Day | null {
    const rawCurrentDay = localStorage.getItem(this.currentDayKey);
    if (rawCurrentDay) {
      const day = JSON.parse(rawCurrentDay);
      return Day.fill(day);
    }
    
    return null;
  }

  clearCurrentDay() {
    localStorage.removeItem(this.currentDayKey);
  }

  saveExercisesDone(exercisesDone: ExercisesDone) {
    localStorage.setItem(this.exercisesDoneKey, JSON.stringify(exercisesDone));
  }
  

  getExercisesDone(): ExercisesDone | null {
    const rawExercisesDone = localStorage.getItem(this.exercisesDoneKey);
    if (rawExercisesDone) {
      const data = JSON.parse(rawExercisesDone);
      const res = new ExercisesDone();
      for (let id in data.exercises) {
          const done = data.exercises[id];
          res.add(parseInt(id), done);
      }
      return res;
    }
    
    return null;
  }

  clearExercisesDone() {
    localStorage.removeItem(this.exercisesDoneKey);
  }

  saveOptions(options: Options) {
    localStorage.setItem(this.optionsKey, JSON.stringify(options));
  
  }

  getOptions(): Options | null {
    const rawOptions = localStorage.getItem(this.optionsKey);
    if (rawOptions) {
      const raw = JSON.parse(rawOptions);
      return new Options(raw.level);
    } else {
      return null;
    }
  }

  saveDayStarted(dayStarted: boolean) {
    localStorage.setItem('dayStarted', JSON.stringify(dayStarted));
  }

  getDayStarted(): boolean {
    const rawDayStarted = localStorage.getItem('dayStarted');
    if (rawDayStarted) {
      return JSON.parse(rawDayStarted);
    } else {
      return false;
    }
  }

  clearOptions() {
    localStorage.removeItem(this.optionsKey);
  }

  saveLastDayResult(dayResult: number) {
    localStorage.setItem('lastDayResult', JSON.stringify(dayResult));
  }

  getLastDayResult(): number {
    const rawLastDayResult = localStorage.getItem('lastDayResult');
    if (rawLastDayResult) {
      return JSON.parse(rawLastDayResult);
    } else {
      return 0;
    }
  }
}
