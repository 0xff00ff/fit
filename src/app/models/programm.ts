import { Exercise } from "./exercise";

export class Programm {
    currentDay: Day = new Day();
    programm: Day[] = [];
}

export class Day {
    index: number = 1;
    exercises: Exercise[] = [];
    date? = new Date();
    done? = false;

    constructor(exercises: Exercise[] = [], index: number = 1) {
        this.exercises = exercises;
        this.index = index;
    }
}