export class Exercise {
    id: number = 0; 
    group: ExerciseType = ExerciseType.Undefined;
    level: number = 0;
    title: string = '';
    video: string = '';
    iterations: number = 1;
    quantity: number = 1;
    mono: boolean = false;
    time?: boolean = false;

    static fill(obj: any) {
        const ex = new Exercise();
        ex.id = obj.id;
        ex.group = obj.group;
        ex.level = obj.level;
        ex.title = obj.title;
        ex.video = obj.video;
        ex.iterations = obj.iterations;
        ex.quantity = obj.quantity;
        ex.mono = obj.mono;
        ex.time = obj.time;
        return ex;
    }
}

export enum ExerciseType {
    Undefined = 0,
    Legs = 1,
    Shoulders = 2,
    Press = 3,
    PullUps = 4,
    PushUps = 5,
    Back = 6
  }