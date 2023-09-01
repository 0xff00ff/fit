export enum Level {
    Beginner = 1, // 3 days per week, 2 exercises per day
    Intermediate = 2, // 3 days per week, 3 exercises per day
    Advanced = 3 // 3 days per week, 6 exercises per day
}

export class Options {
    level: Level = Level.Beginner;

    constructor(level: Level = Level.Beginner) {
        this.level = level;
    }

    static restore(opt: any) {
        return new Options(opt.level);
    }
}