import { Exercise } from "./exercise";

export class Programm {
    currentDay: Day = new Day();
    programm: Day[] = [];

    static fill(data: any): Programm {
        const res = new Programm();
        res.currentDay = Day.fill(data.currentDay);
        res.programm = data.programm.map((d: any) => Day.fill(d));
        return res;
    }
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

    static fill(data: any): Day {
        const res = new Day();
        res.index = data.index;
        res.exercises = data.exercises.map((e: any) => Exercise.fill(e));
        return res;
    }
}