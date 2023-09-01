export class Exercise {
    id: number = 0; 
    group: ExerciseType = ExerciseType.Undefined;
    level: number = 0;
    title: string = '';
    video: string = '';
    iterations: number = 1;
    quantity: number = 1;
    mono: boolean = false;
    time?: string = '';
    images?: string[] = [];

    getType(): string {
        const r = exerciseTypeNames[this.group];
        return r;
    }

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
        ex.images = obj.images;
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

const exerciseTypeNames = {
    [ExerciseType.Undefined]: 'Неизвестно',
    [ExerciseType.Legs]: 'Ноги',
    [ExerciseType.Shoulders]: 'Плечи',
    [ExerciseType.Press]: 'Пресс',
    [ExerciseType.PullUps]: 'Подтягивания',
    [ExerciseType.PushUps]: 'Отжимания',
    [ExerciseType.Back]: 'Спина'
}