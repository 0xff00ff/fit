import { Exercise } from "./exercise";

export class ExercisesDone{
    exercises: {[key: number]: boolean} = {};

    constructor() {
    }

    add(id: number, done: boolean) {
        this.exercises[id] = done;
    }

    done(ex: Exercise) {
        this.exercises[ex.id] = true;
    }

    skip(ex: Exercise, date?: Date) {
        this.exercises[ex.id] = false;
    }

    remove(ex: Exercise) {
        delete this.exercises[ex.id];

    }

    find(ex: Exercise) {
        return this.exercises[ex.id] !== undefined;
    }

    isDone(ex: Exercise) {
        return this.exercises[ex.id] === true;
    }

    isSkipped(ex: Exercise) {
        return this.exercises[ex.id] === false;
    }

    len() {
        return Object.keys(this.exercises).length;
    }

    clearUnfinished() {
        for (let id in this.exercises) {
            if (this.exercises[id] === false) {
                delete this.exercises[id];
            }
        }
    }
}

export class UserExercise {
    exercise: Exercise;
    date: Date = new Date();

    constructor(exercise: Exercise, date: Date = new Date()) {
        this.exercise = exercise;
        this.date = date;
    }
}