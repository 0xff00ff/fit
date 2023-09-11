import { Injectable } from '@angular/core';
import { Exercise, ExerciseType } from '../models/exercise';



@Injectable({
  providedIn: 'root'
})
export class ExercisesService {

  exercises: Exercises = new Exercises([
    Exercise.fill({id: 1, group: ExerciseType.PushUps, level: 1, title: 'Отжимания от стены', video: '', iterations: 1, quantity: 10, mono: false, images: [
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/push-ups/Screenshot+2023-08-31+230556.png', 'https://fit-static-cc.s3.eu-central-1.amazonaws.com/push-ups/Screenshot+2023-08-31+231002.png',
    ]}),
    Exercise.fill({id: 2, group: ExerciseType.PushUps, level: 2, title: 'Отжимания от стены', video: '', iterations: 2, quantity: 25, mono: false, images: [
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/push-ups/Screenshot+2023-08-31+230556.png', 'https://fit-static-cc.s3.eu-central-1.amazonaws.com/push-ups/Screenshot+2023-08-31+231002.png',
    ]}),
    Exercise.fill({id: 3, group: ExerciseType.PushUps, level: 3, title: 'Отжимания от стены', video: '', iterations: 3, quantity: 50, mono: false,  images: [
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/push-ups/Screenshot+2023-08-31+230556.png', 'https://fit-static-cc.s3.eu-central-1.amazonaws.com/push-ups/Screenshot+2023-08-31+231002.png',
    ]}),

    Exercise.fill({id: 4, group: ExerciseType.PushUps, level: 4, title: 'Наклонные отжимания', video: '', iterations: 1, quantity: 10, mono: false, images: [
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/push-ups/Screenshot+2023-08-31+234452.png', 'https://fit-static-cc.s3.eu-central-1.amazonaws.com/push-ups/Screenshot+2023-08-31+234511.png',
    ]}),
    Exercise.fill({id: 5, group: ExerciseType.PushUps, level: 5, title: 'Наклонные отжимания', video: '', iterations: 2, quantity: 20, mono: false, images: [
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/push-ups/Screenshot+2023-08-31+234452.png', 'https://fit-static-cc.s3.eu-central-1.amazonaws.com/push-ups/Screenshot+2023-08-31+234511.png',
    ]}),
    Exercise.fill({id: 6, group: ExerciseType.PushUps, level: 6, title: 'Наклонные отжимания', video: '', iterations: 3, quantity: 40, mono: false, images: [
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/push-ups/Screenshot+2023-08-31+234452.png', 'https://fit-static-cc.s3.eu-central-1.amazonaws.com/push-ups/Screenshot+2023-08-31+234511.png',
    ]}),

    Exercise.fill({id: 7, group: ExerciseType.PushUps, level: 7, title: 'Отжимания на коленях', video: '', iterations: 1, quantity: 10, mono: false, images: [
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/push-ups/Screenshot+2023-08-31+235021.png', 'https://fit-static-cc.s3.eu-central-1.amazonaws.com/push-ups/Screenshot+2023-08-31+235031.png'
    ]}),
    Exercise.fill({id: 8, group: ExerciseType.PushUps, level: 8, title: 'Отжимания на коленях', video: '', iterations: 2, quantity: 15, mono: false, images: [
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/push-ups/Screenshot+2023-08-31+235021.png', 'https://fit-static-cc.s3.eu-central-1.amazonaws.com/push-ups/Screenshot+2023-08-31+235031.png'
    ]}),
    Exercise.fill({id: 9, group: ExerciseType.PushUps, level: 9, title: 'Отжимания на коленях', video: '', iterations: 3, quantity: 30, mono: false, images: [
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/push-ups/Screenshot+2023-08-31+235021.png', 'https://fit-static-cc.s3.eu-central-1.amazonaws.com/push-ups/Screenshot+2023-08-31+235031.png'
    ]}),

    Exercise.fill({id: 10, group: ExerciseType.PushUps, level: 10, title: 'Половинные отжимания', video: '', iterations: 1, quantity: 8, mono: false, images: [
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/push-ups/Screenshot+2023-08-31+235049.png', 'https://fit-static-cc.s3.eu-central-1.amazonaws.com/push-ups/Screenshot+2023-08-31+235059.png'
    ]}),
    Exercise.fill({id: 11, group: ExerciseType.PushUps, level: 11, title: 'Половинные отжимания', video: '', iterations: 2, quantity: 12, mono: false, images: [
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/push-ups/Screenshot+2023-08-31+235049.png', 'https://fit-static-cc.s3.eu-central-1.amazonaws.com/push-ups/Screenshot+2023-08-31+235059.png'
    ]}),
    Exercise.fill({id: 12, group: ExerciseType.PushUps, level: 12, title: 'Половинные отжимания', video: '', iterations: 2, quantity: 25, mono: false, images: [
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/push-ups/Screenshot+2023-08-31+235049.png', 'https://fit-static-cc.s3.eu-central-1.amazonaws.com/push-ups/Screenshot+2023-08-31+235059.png'
    ]}),

    Exercise.fill({id: 13, group: ExerciseType.PushUps, level: 13, title: 'Полные отжимания', video: '', iterations: 1, quantity: 5, mono: false, images: [
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/push-ups/Screenshot+2023-08-31+235112.png', 'https://fit-static-cc.s3.eu-central-1.amazonaws.com/push-ups/Screenshot+2023-08-31+235122.png'
    ]}),
    Exercise.fill({id: 14, group: ExerciseType.PushUps, level: 14, title: 'Полные отжимания', video: '', iterations: 2, quantity: 10, mono: false, images: [
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/push-ups/Screenshot+2023-08-31+235112.png', 'https://fit-static-cc.s3.eu-central-1.amazonaws.com/push-ups/Screenshot+2023-08-31+235122.png'
    ]}),
    Exercise.fill({id: 15, group: ExerciseType.PushUps, level: 15, title: 'Полные отжимания', video: '', iterations: 2, quantity: 20, mono: false, images: [
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/push-ups/Screenshot+2023-08-31+235112.png', 'https://fit-static-cc.s3.eu-central-1.amazonaws.com/push-ups/Screenshot+2023-08-31+235122.png'
    ]}),

    Exercise.fill({id: 16, group: ExerciseType.PushUps, level: 16, title: 'Плотные отжимания', video: '', iterations: 1, quantity: 5, mono: false, images: [
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/push-ups/Screenshot+2023-08-31+235133.png', 'https://fit-static-cc.s3.eu-central-1.amazonaws.com/push-ups/Screenshot+2023-08-31+235142.png'
    ]}),
    Exercise.fill({id: 17, group: ExerciseType.PushUps, level: 17, title: 'Плотные отжимания', video: '', iterations: 2, quantity: 10, mono: false, images: [
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/push-ups/Screenshot+2023-08-31+235133.png', 'https://fit-static-cc.s3.eu-central-1.amazonaws.com/push-ups/Screenshot+2023-08-31+235142.png'
    ]}),
    Exercise.fill({id: 18, group: ExerciseType.PushUps, level: 18, title: 'Плотные отжимания', video: '', iterations: 2, quantity: 20, mono: false, images: [
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/push-ups/Screenshot+2023-08-31+235133.png', 'https://fit-static-cc.s3.eu-central-1.amazonaws.com/push-ups/Screenshot+2023-08-31+235142.png'
    ]}),

    Exercise.fill({id: 19, group: ExerciseType.PushUps, level: 19, title: 'Неравномерные отжимания', video: '', iterations: 1, quantity: 5, mono: true, images: [
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/push-ups/Screenshot+2023-08-31+235200.png', 'https://fit-static-cc.s3.eu-central-1.amazonaws.com/push-ups/Screenshot+2023-08-31+235208.png'
    ]}),
    Exercise.fill({id: 20, group: ExerciseType.PushUps, level: 20, title: 'Неравномерные отжимания', video: '', iterations: 2, quantity: 10, mono: true, images: [
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/push-ups/Screenshot+2023-08-31+235200.png', 'https://fit-static-cc.s3.eu-central-1.amazonaws.com/push-ups/Screenshot+2023-08-31+235208.png'
    ]}),
    Exercise.fill({id: 21, group: ExerciseType.PushUps, level: 21, title: 'Неравномерные отжимания', video: '', iterations: 2, quantity: 20, mono: true, images: [
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/push-ups/Screenshot+2023-08-31+235200.png', 'https://fit-static-cc.s3.eu-central-1.amazonaws.com/push-ups/Screenshot+2023-08-31+235208.png'
    ]}),

    Exercise.fill({id: 22, group: ExerciseType.PushUps, level: 22, title: 'Половинные отжимания на одной руке', video: '', iterations: 1, quantity: 5, mono: true, images: [
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/push-ups/Screenshot+2023-08-31+235219.png', 'https://fit-static-cc.s3.eu-central-1.amazonaws.com/push-ups/Screenshot+2023-08-31+235227.png'
    ]}),
    Exercise.fill({id: 23, group: ExerciseType.PushUps, level: 23, title: 'Половинные отжимания на одной руке', video: '', iterations: 2, quantity: 10, mono: true, images: [
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/push-ups/Screenshot+2023-08-31+235219.png', 'https://fit-static-cc.s3.eu-central-1.amazonaws.com/push-ups/Screenshot+2023-08-31+235227.png'
    ]}),
    Exercise.fill({id: 24, group: ExerciseType.PushUps, level: 24, title: 'Половинные отжимания на одной руке', video: '', iterations: 2, quantity: 20, mono: true, images: [
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/push-ups/Screenshot+2023-08-31+235219.png', 'https://fit-static-cc.s3.eu-central-1.amazonaws.com/push-ups/Screenshot+2023-08-31+235227.png'
    ]}),

    Exercise.fill({id: 25, group: ExerciseType.PushUps, level: 25, title: 'Рычажные отжимания', video: '', iterations: 1, quantity: 5, mono: true, images: [
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/push-ups/Screenshot+2023-08-31+235238.png', 'https://fit-static-cc.s3.eu-central-1.amazonaws.com/push-ups/Screenshot+2023-08-31+235246.png'
    ]}),
    Exercise.fill({id: 26, group: ExerciseType.PushUps, level: 26, title: 'Рычажные отжимания', video: '', iterations: 2, quantity: 10, mono: true, images: [
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/push-ups/Screenshot+2023-08-31+235238.png', 'https://fit-static-cc.s3.eu-central-1.amazonaws.com/push-ups/Screenshot+2023-08-31+235246.png'
    ]}),
    Exercise.fill({id: 27, group: ExerciseType.PushUps, level: 27, title: 'Рычажные отжимания', video: '', iterations: 2, quantity: 20, mono: true, images: [
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/push-ups/Screenshot+2023-08-31+235238.png', 'https://fit-static-cc.s3.eu-central-1.amazonaws.com/push-ups/Screenshot+2023-08-31+235246.png'
    ]}),

    Exercise.fill({id: 28, group: ExerciseType.PushUps, level: 28, title: 'Отжимания на одной руке', video: '', iterations: 1, quantity: 5, mono: true, images: [
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/push-ups/Screenshot+2023-08-31+235258.png', 'https://fit-static-cc.s3.eu-central-1.amazonaws.com/push-ups/Screenshot+2023-08-31+235308.png'
    ]}),
    Exercise.fill({id: 29, group: ExerciseType.PushUps, level: 29, title: 'Отжимания на одной руке', video: '', iterations: 2, quantity: 10, mono: true, images: [
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/push-ups/Screenshot+2023-08-31+235258.png', 'https://fit-static-cc.s3.eu-central-1.amazonaws.com/push-ups/Screenshot+2023-08-31+235308.png'
    ]}),
    Exercise.fill({id: 30, group: ExerciseType.PushUps, level: 30, title: 'Отжимания на одной руке', video: '', iterations: 1, quantity: 100, mono: true, images: [
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/push-ups/Screenshot+2023-08-31+235258.png', 'https://fit-static-cc.s3.eu-central-1.amazonaws.com/push-ups/Screenshot+2023-08-31+235308.png'
    ]}),

    



    Exercise.fill({id: 31, group: ExerciseType.Legs, level: 1, title: 'Плечи на полу', video: '', iterations: 1, quantity: 10, mono: false, images: [
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/legs/Screenshot+2023-08-31+235351.png', 'https://fit-static-cc.s3.eu-central-1.amazonaws.com/legs/Screenshot+2023-08-31+235358.png'
    ]}),
    Exercise.fill({id: 32, group: ExerciseType.Legs, level: 2, title: 'Плечи на полу', video: '', iterations: 2, quantity: 25, mono: false, images: [
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/legs/Screenshot+2023-08-31+235351.png', 'https://fit-static-cc.s3.eu-central-1.amazonaws.com/legs/Screenshot+2023-08-31+235358.png'
    ]}),
    Exercise.fill({id: 33, group: ExerciseType.Legs, level: 3, title: 'Плечи на полу', video: '', iterations: 3, quantity: 50, mono: false, images: [
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/legs/Screenshot+2023-08-31+235351.png', 'https://fit-static-cc.s3.eu-central-1.amazonaws.com/legs/Screenshot+2023-08-31+235358.png'
    ]}),

    Exercise.fill({id: 34, group: ExerciseType.Legs, level: 4, title: 'Приседания "складной ножик"', video: '', iterations: 1, quantity: 10, mono: false, images: [
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/legs/Screenshot+2023-08-31+235409.png', 'https://fit-static-cc.s3.eu-central-1.amazonaws.com/legs/Screenshot+2023-08-31+235420.png'
    ]}),
    Exercise.fill({id: 35, group: ExerciseType.Legs, level: 5, title: 'Приседания "складной ножик"', video: '', iterations: 2, quantity: 20, mono: false, images: [
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/legs/Screenshot+2023-08-31+235409.png', 'https://fit-static-cc.s3.eu-central-1.amazonaws.com/legs/Screenshot+2023-08-31+235420.png'
    ]}),
    Exercise.fill({id: 36, group: ExerciseType.Legs, level: 6, title: 'Приседания "складной ножик"', video: '', iterations: 3, quantity: 40, mono: false, images: [
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/legs/Screenshot+2023-08-31+235409.png', 'https://fit-static-cc.s3.eu-central-1.amazonaws.com/legs/Screenshot+2023-08-31+235420.png'
    ]}),

    Exercise.fill({id: 37, group: ExerciseType.Legs, level: 7, title: 'Поддержаный присед', video: '', iterations: 1, quantity: 10, mono: false, images: [
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/legs/Screenshot+2023-08-31+235432.png', 'https://fit-static-cc.s3.eu-central-1.amazonaws.com/legs/Screenshot+2023-08-31+235439.png'
    ]}),
    Exercise.fill({id: 38, group: ExerciseType.Legs, level: 8, title: 'Поддержаный присед', video: '', iterations: 2, quantity: 15, mono: false, images: [
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/legs/Screenshot+2023-08-31+235432.png', 'https://fit-static-cc.s3.eu-central-1.amazonaws.com/legs/Screenshot+2023-08-31+235439.png'
    ]}),
    Exercise.fill({id: 39, group: ExerciseType.Legs, level: 9, title: 'Поддержаный присед', video: '', iterations: 3, quantity: 30, mono: false, images: [
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/legs/Screenshot+2023-08-31+235432.png', 'https://fit-static-cc.s3.eu-central-1.amazonaws.com/legs/Screenshot+2023-08-31+235439.png'
    ]}),

    Exercise.fill({id: 40, group: ExerciseType.Legs, level: 10, title: 'Полуприсяд', video: '', iterations: 1, quantity: 8, mono: false, images: [
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/legs/Screenshot+2023-08-31+235450.png', 'https://fit-static-cc.s3.eu-central-1.amazonaws.com/legs/Screenshot+2023-08-31+235458.png'
    ]}),
    Exercise.fill({id: 41, group: ExerciseType.Legs, level: 11, title: 'Полуприсяд', video: '', iterations: 2, quantity: 35, mono: false, images: [
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/legs/Screenshot+2023-08-31+235450.png', 'https://fit-static-cc.s3.eu-central-1.amazonaws.com/legs/Screenshot+2023-08-31+235458.png'
    ]}),
    Exercise.fill({id: 42, group: ExerciseType.Legs, level: 12, title: 'Полуприсяд', video: '', iterations: 2, quantity: 50, mono: false, images: [
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/legs/Screenshot+2023-08-31+235450.png', 'https://fit-static-cc.s3.eu-central-1.amazonaws.com/legs/Screenshot+2023-08-31+235458.png'
    ]}),

    Exercise.fill({id: 43, group: ExerciseType.Legs, level: 13, title: 'Полные приседания', video: '', iterations: 1, quantity: 5, mono: false, images: [
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/legs/Screenshot+2023-08-31+235508.png', 'https://fit-static-cc.s3.eu-central-1.amazonaws.com/legs/Screenshot+2023-08-31+235516.png'
    ]}),
    Exercise.fill({id: 44, group: ExerciseType.Legs, level: 14, title: 'Полные приседания', video: '', iterations: 2, quantity: 10, mono: false, images: [
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/legs/Screenshot+2023-08-31+235508.png', 'https://fit-static-cc.s3.eu-central-1.amazonaws.com/legs/Screenshot+2023-08-31+235516.png'
    ]}),
    Exercise.fill({id: 45, group: ExerciseType.Legs, level: 15, title: 'Полные приседания', video: '', iterations: 2, quantity: 30, mono: false, images: [
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/legs/Screenshot+2023-08-31+235508.png', 'https://fit-static-cc.s3.eu-central-1.amazonaws.com/legs/Screenshot+2023-08-31+235516.png'
    ]}),

    Exercise.fill({id: 46, group: ExerciseType.Legs, level: 16, title: 'Закрытые приседания', video: '', iterations: 1, quantity: 5, mono: false, images: [
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/legs/Screenshot+2023-08-31+235536.png', 'https://fit-static-cc.s3.eu-central-1.amazonaws.com/legs/Screenshot+2023-08-31+235543.png'
    ]}),
    Exercise.fill({id: 47, group: ExerciseType.Legs, level: 17, title: 'Закрытые приседания', video: '', iterations: 2, quantity: 10, mono: false, images: [
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/legs/Screenshot+2023-08-31+235536.png', 'https://fit-static-cc.s3.eu-central-1.amazonaws.com/legs/Screenshot+2023-08-31+235543.png'
    ]}),
    Exercise.fill({id: 48, group: ExerciseType.Legs, level: 18, title: 'Закрытые приседания', video: '', iterations: 2, quantity: 20, mono: false, images: [
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/legs/Screenshot+2023-08-31+235536.png', 'https://fit-static-cc.s3.eu-central-1.amazonaws.com/legs/Screenshot+2023-08-31+235543.png'
    ]}),

    Exercise.fill({id: 49, group: ExerciseType.Legs, level: 19, title: 'Неравномерные приседания', video: '', iterations: 1, quantity: 5, mono: true, images: [
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/legs/Screenshot+2023-08-31+235600.png', 'https://fit-static-cc.s3.eu-central-1.amazonaws.com/legs/Screenshot+2023-08-31+235606.png'
    ]}),
    Exercise.fill({id: 50, group: ExerciseType.Legs, level: 20, title: 'Неравномерные приседания', video: '', iterations: 2, quantity: 10, mono: true, images: [
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/legs/Screenshot+2023-08-31+235600.png', 'https://fit-static-cc.s3.eu-central-1.amazonaws.com/legs/Screenshot+2023-08-31+235606.png'
    ]}),
    Exercise.fill({id: 51, group: ExerciseType.Legs, level: 21, title: 'Неравномерные приседания', video: '', iterations: 2, quantity: 20, mono: true, images: [
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/legs/Screenshot+2023-08-31+235600.png', 'https://fit-static-cc.s3.eu-central-1.amazonaws.com/legs/Screenshot+2023-08-31+235606.png'
    ]}),

    Exercise.fill({id: 52, group: ExerciseType.Legs, level: 22, title: 'Половинные приседания на одной ноге', video: '', iterations: 1, quantity: 5, mono: true, images: [
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/legs/Screenshot+2023-08-31+235617.png', 'https://fit-static-cc.s3.eu-central-1.amazonaws.com/legs/Screenshot+2023-08-31+235624.png'
    ]}),
    Exercise.fill({id: 53, group: ExerciseType.Legs, level: 23, title: 'Половинные приседания на одной ноге', video: '', iterations: 2, quantity: 10, mono: true, images: [
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/legs/Screenshot+2023-08-31+235617.png', 'https://fit-static-cc.s3.eu-central-1.amazonaws.com/legs/Screenshot+2023-08-31+235624.png'
    ]}),
    Exercise.fill({id: 54, group: ExerciseType.Legs, level: 24, title: 'Половинные приседания на одной ноге', video: '', iterations: 2, quantity: 20, mono: true, images: [
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/legs/Screenshot+2023-08-31+235617.png', 'https://fit-static-cc.s3.eu-central-1.amazonaws.com/legs/Screenshot+2023-08-31+235624.png'
    ]}),

    Exercise.fill({id: 55, group: ExerciseType.Legs, level: 25, title: 'Приседания на одной ноге с поддержкой', video: '', iterations: 1, quantity: 5, mono: true, images: [
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/legs/Screenshot+2023-08-31+235638.png', 'https://fit-static-cc.s3.eu-central-1.amazonaws.com/legs/Screenshot+2023-08-31+235643.png'
    ]}),
    Exercise.fill({id: 56, group: ExerciseType.Legs, level: 26, title: 'Приседания на одной ноге с поддержкой', video: '', iterations: 2, quantity: 10, mono: true, images: [
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/legs/Screenshot+2023-08-31+235638.png', 'https://fit-static-cc.s3.eu-central-1.amazonaws.com/legs/Screenshot+2023-08-31+235643.png'
    ]}),
    Exercise.fill({id: 57, group: ExerciseType.Legs, level: 27, title: 'Приседания на одной ноге с поддержкой', video: '', iterations: 2, quantity: 20, mono: true, images: [
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/legs/Screenshot+2023-08-31+235638.png', 'https://fit-static-cc.s3.eu-central-1.amazonaws.com/legs/Screenshot+2023-08-31+235643.png'
    ]}),

    Exercise.fill({id: 58, group: ExerciseType.Legs, level: 28, title: 'Приседания на одной ноге', video: '', iterations: 1, quantity: 5, mono: true, images: [
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/legs/Screenshot+2023-08-31+235655.png', 'https://fit-static-cc.s3.eu-central-1.amazonaws.com/legs/Screenshot+2023-08-31+235703.png'
    ]}),
    Exercise.fill({id: 59, group: ExerciseType.Legs, level: 29, title: 'Приседания на одной ноге', video: '', iterations: 2, quantity: 10, mono: true, images: [
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/legs/Screenshot+2023-08-31+235655.png', 'https://fit-static-cc.s3.eu-central-1.amazonaws.com/legs/Screenshot+2023-08-31+235703.png'
    ]}),
    Exercise.fill({id: 60, group: ExerciseType.Legs, level: 30, title: 'Приседания на одной ноге', video: '', iterations: 2, quantity: 50, mono: true, images: [
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/legs/Screenshot+2023-08-31+235655.png', 'https://fit-static-cc.s3.eu-central-1.amazonaws.com/legs/Screenshot+2023-08-31+235703.png'
    ]}),





    Exercise.fill({id: 61, group: ExerciseType.PullUps, level: 1, title: 'Вертикальное подтягивание', video: '', iterations: 1, quantity: 10, mono: false, images: [
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/pull-ups/Screenshot+2023-09-01+000058.png', 'https://fit-static-cc.s3.eu-central-1.amazonaws.com/pull-ups/Screenshot+2023-09-01+000105.png'
    ]}),
    Exercise.fill({id: 62, group: ExerciseType.PullUps, level: 2, title: 'Вертикальное подтягивание', video: '', iterations: 2, quantity: 25, mono: false, images: [
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/pull-ups/Screenshot+2023-09-01+000058.png', 'https://fit-static-cc.s3.eu-central-1.amazonaws.com/pull-ups/Screenshot+2023-09-01+000105.png'
    ]}),
    Exercise.fill({id: 63, group: ExerciseType.PullUps, level: 3, title: 'Вертикальное подтягивание', video: '', iterations: 3, quantity: 40, mono: false, images: [
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/pull-ups/Screenshot+2023-09-01+000058.png', 'https://fit-static-cc.s3.eu-central-1.amazonaws.com/pull-ups/Screenshot+2023-09-01+000105.png'
    ]}),

    Exercise.fill({id: 64, group: ExerciseType.PullUps, level: 4, title: 'Горизонтальное подтягивание', video: '', iterations: 1, quantity: 10, mono: false, images: [
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/pull-ups/Screenshot+2023-09-01+000119.png', 'https://fit-static-cc.s3.eu-central-1.amazonaws.com/pull-ups/Screenshot+2023-09-01+000127.png'
    ]}),
    Exercise.fill({id: 65, group: ExerciseType.PullUps, level: 5, title: 'Горизонтальное подтягивание', video: '', iterations: 2, quantity: 20, mono: false, images: [
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/pull-ups/Screenshot+2023-09-01+000119.png', 'https://fit-static-cc.s3.eu-central-1.amazonaws.com/pull-ups/Screenshot+2023-09-01+000127.png'
    ]}),
    Exercise.fill({id: 66, group: ExerciseType.PullUps, level: 6, title: 'Горизонтальное подтягивание', video: '', iterations: 3, quantity: 30, mono: false, images: [
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/pull-ups/Screenshot+2023-09-01+000119.png', 'https://fit-static-cc.s3.eu-central-1.amazonaws.com/pull-ups/Screenshot+2023-09-01+000127.png'
    ]}),

    Exercise.fill({id: 67, group: ExerciseType.PullUps, level: 7, title: 'Подтягивание "перочинный нож"', video: '', iterations: 1, quantity: 10, mono: false, images: [
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/pull-ups/Screenshot+2023-09-01+000137.png', 'https://fit-static-cc.s3.eu-central-1.amazonaws.com/pull-ups/Screenshot+2023-09-01+000145.png'
    ]}),
    Exercise.fill({id: 68, group: ExerciseType.PullUps, level: 8, title: 'Подтягивание "перочинный нож"', video: '', iterations: 2, quantity: 15, mono: false, images: [
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/pull-ups/Screenshot+2023-09-01+000137.png', 'https://fit-static-cc.s3.eu-central-1.amazonaws.com/pull-ups/Screenshot+2023-09-01+000145.png'
    ]}),
    Exercise.fill({id: 69, group: ExerciseType.PullUps, level: 9, title: 'Подтягивание "перочинный нож"', video: '', iterations: 3, quantity: 20, mono: false, images: [
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/pull-ups/Screenshot+2023-09-01+000137.png', 'https://fit-static-cc.s3.eu-central-1.amazonaws.com/pull-ups/Screenshot+2023-09-01+000145.png'
    ]}),

    Exercise.fill({id: 70, group: ExerciseType.PullUps, level: 10, title: 'Полуподтягивания', video: '', iterations: 1, quantity: 8, mono: false, images: [
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/pull-ups/Screenshot+2023-09-01+000155.png', 'https://fit-static-cc.s3.eu-central-1.amazonaws.com/pull-ups/Screenshot+2023-09-01+000202.png'
    ]}),
    Exercise.fill({id: 71, group: ExerciseType.PullUps, level: 11, title: 'Полуподтягивания', video: '', iterations: 2, quantity: 11, mono: false, images: [
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/pull-ups/Screenshot+2023-09-01+000155.png', 'https://fit-static-cc.s3.eu-central-1.amazonaws.com/pull-ups/Screenshot+2023-09-01+000202.png'
    ]}),
    Exercise.fill({id: 72, group: ExerciseType.PullUps, level: 12, title: 'Полуподтягивания', video: '', iterations: 2, quantity: 15, mono: false, images: [
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/pull-ups/Screenshot+2023-09-01+000155.png', 'https://fit-static-cc.s3.eu-central-1.amazonaws.com/pull-ups/Screenshot+2023-09-01+000202.png'
    ]}),

    Exercise.fill({id: 73, group: ExerciseType.PullUps, level: 13, title: 'Полное подтягивание', video: '', iterations: 1, quantity: 5, mono: false, images: [
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/pull-ups/Screenshot+2023-09-01+000212.png', 'https://fit-static-cc.s3.eu-central-1.amazonaws.com/pull-ups/Screenshot+2023-09-01+000219.png'
    ]}),
    Exercise.fill({id: 74, group: ExerciseType.PullUps, level: 14, title: 'Полное подтягивание', video: '', iterations: 2, quantity: 8, mono: false, images: [
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/pull-ups/Screenshot+2023-09-01+000212.png', 'https://fit-static-cc.s3.eu-central-1.amazonaws.com/pull-ups/Screenshot+2023-09-01+000219.png'
    ]}),
    Exercise.fill({id: 75, group: ExerciseType.PullUps, level: 15, title: 'Полное подтягивание', video: '', iterations: 2, quantity: 10, mono: false, images: [
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/pull-ups/Screenshot+2023-09-01+000212.png', 'https://fit-static-cc.s3.eu-central-1.amazonaws.com/pull-ups/Screenshot+2023-09-01+000219.png'
    ]}),

    Exercise.fill({id: 76, group: ExerciseType.PullUps, level: 16, title: 'Подтягивания узким хватом', video: '', iterations: 1, quantity: 5, mono: false, images: [
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/pull-ups/Screenshot+2023-09-01+000227.png', 'https://fit-static-cc.s3.eu-central-1.amazonaws.com/pull-ups/Screenshot+2023-09-01+000242.png'
    ]}),
    Exercise.fill({id: 77, group: ExerciseType.PullUps, level: 17, title: 'Подтягивания узким хватом', video: '', iterations: 2, quantity: 8, mono: false, images: [
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/pull-ups/Screenshot+2023-09-01+000227.png', 'https://fit-static-cc.s3.eu-central-1.amazonaws.com/pull-ups/Screenshot+2023-09-01+000242.png'
    ]}),
    Exercise.fill({id: 78, group: ExerciseType.PullUps, level: 18, title: 'Подтягивания узким хватом', video: '', iterations: 2, quantity: 10, mono: false, images: [
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/pull-ups/Screenshot+2023-09-01+000227.png', 'https://fit-static-cc.s3.eu-central-1.amazonaws.com/pull-ups/Screenshot+2023-09-01+000242.png'
    ]}),

    Exercise.fill({id: 79, group: ExerciseType.PullUps, level: 19, title: 'Неравные подтягивания', video: '', iterations: 1, quantity: 5, mono: true, images: [
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/pull-ups/Screenshot+2023-09-01+000251.png', 'https://fit-static-cc.s3.eu-central-1.amazonaws.com/pull-ups/Screenshot+2023-09-01+000259.png'
    ]}),
    Exercise.fill({id: 80, group: ExerciseType.PullUps, level: 20, title: 'Неравные подтягивания', video: '', iterations: 2, quantity: 7, mono: true, images: [
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/pull-ups/Screenshot+2023-09-01+000251.png', 'https://fit-static-cc.s3.eu-central-1.amazonaws.com/pull-ups/Screenshot+2023-09-01+000259.png'
    ]}),
    Exercise.fill({id: 81, group: ExerciseType.PullUps, level: 21, title: 'Неравные подтягивания', video: '', iterations: 2, quantity: 9, mono: true, images: [
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/pull-ups/Screenshot+2023-09-01+000251.png', 'https://fit-static-cc.s3.eu-central-1.amazonaws.com/pull-ups/Screenshot+2023-09-01+000259.png'
    ]}),

    Exercise.fill({id: 82, group: ExerciseType.PullUps, level: 22, title: 'Половинные подтягивания на одной руке', video: '', iterations: 1, quantity: 4, mono: true, images: [
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/pull-ups/Screenshot+2023-09-01+000309.png', 'https://fit-static-cc.s3.eu-central-1.amazonaws.com/pull-ups/Screenshot+2023-09-01+000316.png'
    ]}),
    Exercise.fill({id: 83, group: ExerciseType.PullUps, level: 23, title: 'Половинные подтягивания на одной руке', video: '', iterations: 2, quantity: 6, mono: true, images: [
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/pull-ups/Screenshot+2023-09-01+000309.png', 'https://fit-static-cc.s3.eu-central-1.amazonaws.com/pull-ups/Screenshot+2023-09-01+000316.png'
    ]}),
    Exercise.fill({id: 84, group: ExerciseType.PullUps, level: 24, title: 'Половинные подтягивания на одной руке', video: '', iterations: 2, quantity: 8, mono: true, images: [
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/pull-ups/Screenshot+2023-09-01+000309.png', 'https://fit-static-cc.s3.eu-central-1.amazonaws.com/pull-ups/Screenshot+2023-09-01+000316.png'
    ]}),

    Exercise.fill({id: 85, group: ExerciseType.PullUps, level: 25, title: 'Ассистированные подтягивания на одной руке', video: '', iterations: 1, quantity: 3, mono: true, images: [
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/pull-ups/Screenshot+2023-09-01+000327.png', 'https://fit-static-cc.s3.eu-central-1.amazonaws.com/pull-ups/Screenshot+2023-09-01+000333.png'
    ]}),
    Exercise.fill({id: 86, group: ExerciseType.PullUps, level: 26, title: 'Ассистированные подтягивания на одной руке', video: '', iterations: 2, quantity: 5, mono: true, images: [
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/pull-ups/Screenshot+2023-09-01+000327.png', 'https://fit-static-cc.s3.eu-central-1.amazonaws.com/pull-ups/Screenshot+2023-09-01+000333.png'
    ]}),
    Exercise.fill({id: 87, group: ExerciseType.PullUps, level: 27, title: 'Ассистированные подтягивания на одной руке', video: '', iterations: 2, quantity: 7, mono: true, images: [
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/pull-ups/Screenshot+2023-09-01+000327.png', 'https://fit-static-cc.s3.eu-central-1.amazonaws.com/pull-ups/Screenshot+2023-09-01+000333.png'
    ]}),

    Exercise.fill({id: 88, group: ExerciseType.PullUps, level: 28, title: 'Подтягивания на одной руке', video: '', iterations: 1, quantity: 1, mono: true, images: [
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/pull-ups/Screenshot+2023-09-01+000344.png', 'https://fit-static-cc.s3.eu-central-1.amazonaws.com/pull-ups/Screenshot+2023-09-01+000352.png'
    ]}),
    Exercise.fill({id: 89, group: ExerciseType.PullUps, level: 29, title: 'Подтягивания на одной руке', video: '', iterations: 2, quantity: 3, mono: true, images: [
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/pull-ups/Screenshot+2023-09-01+000344.png', 'https://fit-static-cc.s3.eu-central-1.amazonaws.com/pull-ups/Screenshot+2023-09-01+000352.png'
    ]}),
    Exercise.fill({id: 90, group: ExerciseType.PullUps, level: 30, title: 'Подтягивания на одной руке', video: '', iterations: 2, quantity: 6, mono: true, images: [
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/pull-ups/Screenshot+2023-09-01+000344.png', 'https://fit-static-cc.s3.eu-central-1.amazonaws.com/pull-ups/Screenshot+2023-09-01+000352.png'
    ]}),





    Exercise.fill({id: 91, group: ExerciseType.Press, level: 1, title: 'Подтягивание колен к животу', video: '', iterations: 1, quantity: 10, mono: false, images: [
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/press/Screenshot+2023-09-01+000707.png', 'https://fit-static-cc.s3.eu-central-1.amazonaws.com/press/Screenshot+2023-09-01+000713.png'
    ]}),
    Exercise.fill({id: 92, group: ExerciseType.Press, level: 2, title: 'Подтягивание колен к животу', video: '', iterations: 2, quantity: 25, mono: false, images: [
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/press/Screenshot+2023-09-01+000707.png', 'https://fit-static-cc.s3.eu-central-1.amazonaws.com/press/Screenshot+2023-09-01+000713.png'
    ]}),
    Exercise.fill({id: 93, group: ExerciseType.Press, level: 3, title: 'Подтягивание колен к животу', video: '', iterations: 3, quantity: 40, mono: false, images: [
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/press/Screenshot+2023-09-01+000707.png', 'https://fit-static-cc.s3.eu-central-1.amazonaws.com/press/Screenshot+2023-09-01+000713.png'
    ]}),

    Exercise.fill({id: 94, group: ExerciseType.Press, level: 4, title: 'Подьемы коленей лежа', video: '', iterations: 1, quantity: 10, mono: false, images: [
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/press/Screenshot+2023-09-01+000721.png', 'https://fit-static-cc.s3.eu-central-1.amazonaws.com/press/Screenshot+2023-09-01+000727.png'
    ]}),
    Exercise.fill({id: 95, group: ExerciseType.Press, level: 5, title: 'Подьемы коленей лежа', video: '', iterations: 2, quantity: 20, mono: false, images: [
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/press/Screenshot+2023-09-01+000721.png', 'https://fit-static-cc.s3.eu-central-1.amazonaws.com/press/Screenshot+2023-09-01+000727.png'
    ]}),
    Exercise.fill({id: 96, group: ExerciseType.Press, level: 6, title: 'Подьемы коленей лежа', video: '', iterations: 3, quantity: 35, mono: false, images: [
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/press/Screenshot+2023-09-01+000721.png', 'https://fit-static-cc.s3.eu-central-1.amazonaws.com/press/Screenshot+2023-09-01+000727.png'
    ]}),

    Exercise.fill({id: 97, group: ExerciseType.Press, level: 7, title: 'Подьемы согнутых коленей лежа', video: '', iterations: 1, quantity: 10, mono: false, images: [
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/press/Screenshot+2023-09-01+000746.png', 'https://fit-static-cc.s3.eu-central-1.amazonaws.com/press/Screenshot+2023-09-01+000755.png',
    ]}),
    Exercise.fill({id: 98, group: ExerciseType.Press, level: 8, title: 'Подьемы согнутых коленей лежа', video: '', iterations: 2, quantity: 15, mono: false, images: [
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/press/Screenshot+2023-09-01+000746.png', 'https://fit-static-cc.s3.eu-central-1.amazonaws.com/press/Screenshot+2023-09-01+000755.png',
    ]}),
    Exercise.fill({id: 99, group: ExerciseType.Press, level: 9, title: 'Подьемы согнутых коленей лежа', video: '', iterations: 3, quantity: 30, mono: false, images: [
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/press/Screenshot+2023-09-01+000746.png', 'https://fit-static-cc.s3.eu-central-1.amazonaws.com/press/Screenshot+2023-09-01+000755.png',
    ]}),

    Exercise.fill({id: 100, group: ExerciseType.Press, level: 10, title: 'Лягушачьи подьёмы лёжа', video: '', iterations: 1, quantity: 8, mono: false, images: [
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/press/Screenshot+2023-09-01+000746.png',
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/press/Screenshot+2023-09-01+000755.png',
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/press/Screenshot+2023-09-01+000805.png',
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/press/Screenshot+2023-09-01+000812.png',
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/press/Screenshot+2023-09-01+000819.png'
    ]}),
    Exercise.fill({id: 101, group: ExerciseType.Press, level: 11, title: 'Лягушачьи подьёмы лёжа', video: '', iterations: 2, quantity: 15, mono: false, images: [
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/press/Screenshot+2023-09-01+000746.png',
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/press/Screenshot+2023-09-01+000755.png',
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/press/Screenshot+2023-09-01+000805.png',
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/press/Screenshot+2023-09-01+000812.png',
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/press/Screenshot+2023-09-01+000819.png'
    ]}),
    Exercise.fill({id: 102, group: ExerciseType.Press, level: 12, title: 'Лягушачьи подьёмы лёжа', video: '', iterations: 3, quantity: 25, mono: false, images: [
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/press/Screenshot+2023-09-01+000746.png',
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/press/Screenshot+2023-09-01+000755.png',
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/press/Screenshot+2023-09-01+000805.png',
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/press/Screenshot+2023-09-01+000812.png',
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/press/Screenshot+2023-09-01+000819.png'
    ]}),

    Exercise.fill({id: 103, group: ExerciseType.Press, level: 13, title: 'Ровные прямые подьемы ног', video: '', iterations: 1, quantity: 5, mono: false, images: [
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/press/Screenshot+2023-09-01+162857.png', 'https://fit-static-cc.s3.eu-central-1.amazonaws.com/press/Screenshot+2023-09-01+162905.png'
    ]}),
    Exercise.fill({id: 104, group: ExerciseType.Press, level: 14, title: 'Ровные прямые подьемы ног', video: '', iterations: 2, quantity: 10, mono: false, images: [
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/press/Screenshot+2023-09-01+162857.png', 'https://fit-static-cc.s3.eu-central-1.amazonaws.com/press/Screenshot+2023-09-01+162905.png'
    ]}),
    Exercise.fill({id: 105, group: ExerciseType.Press, level: 15, title: 'Ровные прямые подьемы ног', video: '', iterations: 2, quantity: 20, mono: false, images: [
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/press/Screenshot+2023-09-01+162857.png', 'https://fit-static-cc.s3.eu-central-1.amazonaws.com/press/Screenshot+2023-09-01+162905.png'
    ]}),

    Exercise.fill({id: 106, group: ExerciseType.Press, level: 16, title: 'Подъемы коленей из виса на перекладине', video: '', iterations: 1, quantity: 5, mono: false, images: [
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/press/Screenshot+2023-09-01+162916.png', 'https://fit-static-cc.s3.eu-central-1.amazonaws.com/press/Screenshot+2023-09-01+162925.png',
    ]}),
    Exercise.fill({id: 107, group: ExerciseType.Press, level: 17, title: 'Подъемы коленей из виса на перекладине', video: '', iterations: 2, quantity: 10, mono: false, images: [
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/press/Screenshot+2023-09-01+162916.png', 'https://fit-static-cc.s3.eu-central-1.amazonaws.com/press/Screenshot+2023-09-01+162925.png',
    ]}),
    Exercise.fill({id: 108, group: ExerciseType.Press, level: 18, title: 'Подъемы коленей из виса на перекладине', video: '', iterations: 2, quantity: 15, mono: false, images: [
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/press/Screenshot+2023-09-01+162916.png', 'https://fit-static-cc.s3.eu-central-1.amazonaws.com/press/Screenshot+2023-09-01+162925.png',
    ]}),

    Exercise.fill({id: 109, group: ExerciseType.Press, level: 19, title: 'Подъем согнутой ногой', video: '', iterations: 1, quantity: 5, mono: false, images: [
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/press/Screenshot+2023-09-01+162937.png', 'https://fit-static-cc.s3.eu-central-1.amazonaws.com/press/Screenshot+2023-09-01+162946.png'
    ]}),
    Exercise.fill({id: 110, group: ExerciseType.Press, level: 20, title: 'Подъем согнутой ногой', video: '', iterations: 2, quantity: 10, mono: false, images: [
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/press/Screenshot+2023-09-01+162937.png', 'https://fit-static-cc.s3.eu-central-1.amazonaws.com/press/Screenshot+2023-09-01+162946.png'
    ]}),
    Exercise.fill({id: 111, group: ExerciseType.Press, level: 21, title: 'Подъем согнутой ногой', video: '', iterations: 2, quantity: 15, mono: false, images: [
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/press/Screenshot+2023-09-01+162937.png', 'https://fit-static-cc.s3.eu-central-1.amazonaws.com/press/Screenshot+2023-09-01+162946.png'
    ]}),

    Exercise.fill({id: 112, group: ExerciseType.Press, level: 22, title: 'Висячие подъемы лягушкой', video: '', iterations: 1, quantity: 5, mono: false, images: [
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/press/Screenshot+2023-09-01+162937.png',
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/press/Screenshot+2023-09-01+162946.png',
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/press/Screenshot+2023-09-01+163029.png',
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/press/Screenshot+2023-09-01+163034.png',
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/press/Screenshot+2023-09-01+163039.png'
    ]}),
    Exercise.fill({id: 113, group: ExerciseType.Press, level: 23, title: 'Висячие подъемы лягушкой', video: '', iterations: 2, quantity: 10, mono: false, images: [
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/press/Screenshot+2023-09-01+162937.png',
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/press/Screenshot+2023-09-01+162946.png',
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/press/Screenshot+2023-09-01+163029.png',
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/press/Screenshot+2023-09-01+163034.png',
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/press/Screenshot+2023-09-01+163039.png'
    ]}),
    Exercise.fill({id: 114, group: ExerciseType.Press, level: 24, title: 'Висячие подъемы лягушкой', video: '', iterations: 2, quantity: 15, mono: false, images: [
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/press/Screenshot+2023-09-01+162937.png',
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/press/Screenshot+2023-09-01+162946.png',
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/press/Screenshot+2023-09-01+163029.png',
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/press/Screenshot+2023-09-01+163034.png',
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/press/Screenshot+2023-09-01+163039.png'
    ]}),

    Exercise.fill({id: 115, group: ExerciseType.Press, level: 25, title: 'Подъемы частично прямой ноги', video: '', iterations: 1, quantity: 5, mono: false, images: [
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/press/Screenshot+2023-09-01+163046.png', 'https://fit-static-cc.s3.eu-central-1.amazonaws.com/press/Screenshot+2023-09-01+163051.png'
    ]}),
    Exercise.fill({id: 116, group: ExerciseType.Press, level: 26, title: 'Подъемы частично прямой ноги', video: '', iterations: 2, quantity: 10, mono: false, images: [
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/press/Screenshot+2023-09-01+163046.png', 'https://fit-static-cc.s3.eu-central-1.amazonaws.com/press/Screenshot+2023-09-01+163051.png'
    ]}),
    Exercise.fill({id: 117, group: ExerciseType.Press, level: 27, title: 'Подъемы частично прямой ноги', video: '', iterations: 2, quantity: 15, mono: false, images: [
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/press/Screenshot+2023-09-01+163046.png', 'https://fit-static-cc.s3.eu-central-1.amazonaws.com/press/Screenshot+2023-09-01+163051.png'
    ]}),

    Exercise.fill({id: 118, group: ExerciseType.Press, level: 28, title: 'Подъем прямых ног в висе', video: '', iterations: 1, quantity: 5, mono: false, images: [
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/press/Screenshot+2023-09-01+163058.png', 'https://fit-static-cc.s3.eu-central-1.amazonaws.com/press/Screenshot+2023-09-01+163104.png'
    ]}),
    Exercise.fill({id: 119, group: ExerciseType.Press, level: 29, title: 'Подъем прямых ног в висе', video: '', iterations: 2, quantity: 10, mono: false, images: [
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/press/Screenshot+2023-09-01+163058.png', 'https://fit-static-cc.s3.eu-central-1.amazonaws.com/press/Screenshot+2023-09-01+163104.png'
    ]}),
    Exercise.fill({id: 120, group: ExerciseType.Press, level: 30, title: 'Подъем прямых ног в висе', video: '', iterations: 2, quantity: 30, mono: false, images: [
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/press/Screenshot+2023-09-01+163058.png', 'https://fit-static-cc.s3.eu-central-1.amazonaws.com/press/Screenshot+2023-09-01+163104.png'
    ]}),





    Exercise.fill({id: 121, group: ExerciseType.Back, level: 1, title: 'Короткие мосты', video: '', iterations: 1, quantity: 10, mono: false, images: [
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/back/Screenshot+2023-09-01+163351.png', 'https://fit-static-cc.s3.eu-central-1.amazonaws.com/back/Screenshot+2023-09-01+163356.png'
    ]}),
    Exercise.fill({id: 122, group: ExerciseType.Back, level: 2, title: 'Короткие мосты', video: '', iterations: 2, quantity: 25, mono: false, images: [
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/back/Screenshot+2023-09-01+163351.png', 'https://fit-static-cc.s3.eu-central-1.amazonaws.com/back/Screenshot+2023-09-01+163356.png'
    ]}),
    Exercise.fill({id: 123, group: ExerciseType.Back, level: 3, title: 'Короткие мосты', video: '', iterations: 3, quantity: 50, mono: false, images: [
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/back/Screenshot+2023-09-01+163351.png', 'https://fit-static-cc.s3.eu-central-1.amazonaws.com/back/Screenshot+2023-09-01+163356.png'
    ]}),

    Exercise.fill({id: 124, group: ExerciseType.Back, level: 4, title: 'Ровные мосты', video: '', iterations: 1, quantity: 10, mono: false, images: [
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/back/Screenshot+2023-09-01+163401.png', 'https://fit-static-cc.s3.eu-central-1.amazonaws.com/back/Screenshot+2023-09-01+163406.png'
    ]}),
    Exercise.fill({id: 125, group: ExerciseType.Back, level: 5, title: 'Ровные мосты', video: '', iterations: 2, quantity: 20, mono: false, images: [
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/back/Screenshot+2023-09-01+163401.png', 'https://fit-static-cc.s3.eu-central-1.amazonaws.com/back/Screenshot+2023-09-01+163406.png'
    ]}),
    Exercise.fill({id: 126, group: ExerciseType.Back, level: 6, title: 'Ровные мосты', video: '', iterations: 3, quantity: 40, mono: false, images: [
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/back/Screenshot+2023-09-01+163401.png', 'https://fit-static-cc.s3.eu-central-1.amazonaws.com/back/Screenshot+2023-09-01+163406.png'
    ]}),

    Exercise.fill({id: 127, group: ExerciseType.Back, level: 7, title: 'Мосты под углом', video: '', iterations: 1, quantity: 8, mono: false, images: [
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/back/Screenshot+2023-09-01+163412.png', 'https://fit-static-cc.s3.eu-central-1.amazonaws.com/back/Screenshot+2023-09-01+163417.png'
    ]}),
    Exercise.fill({id: 128, group: ExerciseType.Back, level: 8, title: 'Мосты под углом', video: '', iterations: 2, quantity: 15, mono: false, images: [
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/back/Screenshot+2023-09-01+163412.png', 'https://fit-static-cc.s3.eu-central-1.amazonaws.com/back/Screenshot+2023-09-01+163417.png'
    ]}),
    Exercise.fill({id: 129, group: ExerciseType.Back, level: 9, title: 'Мосты под углом', video: '', iterations: 3, quantity: 30, mono: false, images: [
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/back/Screenshot+2023-09-01+163412.png', 'https://fit-static-cc.s3.eu-central-1.amazonaws.com/back/Screenshot+2023-09-01+163417.png'
    ]}),

    Exercise.fill({id: 130, group: ExerciseType.Back, level: 10, title: 'Мосты на голове', video: '', iterations: 1, quantity: 8, mono: false, images: [
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/back/Screenshot+2023-09-01+163422.png', 'https://fit-static-cc.s3.eu-central-1.amazonaws.com/back/Screenshot+2023-09-01+163427.png'
    ]}),
    Exercise.fill({id: 131, group: ExerciseType.Back, level: 11, title: 'Мосты на голове', video: '', iterations: 2, quantity: 15, mono: false, images: [
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/back/Screenshot+2023-09-01+163422.png', 'https://fit-static-cc.s3.eu-central-1.amazonaws.com/back/Screenshot+2023-09-01+163427.png'
    ]}),
    Exercise.fill({id: 132, group: ExerciseType.Back, level: 12, title: 'Мосты на голове', video: '', iterations: 2, quantity: 25, mono: false, images: [
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/back/Screenshot+2023-09-01+163422.png', 'https://fit-static-cc.s3.eu-central-1.amazonaws.com/back/Screenshot+2023-09-01+163427.png'
    ]}),

    Exercise.fill({id: 133, group: ExerciseType.Back, level: 13, title: 'Половинные мосты', video: '', iterations: 1, quantity: 8, mono: false, images: [
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/back/Screenshot+2023-09-01+163432.png', 'https://fit-static-cc.s3.eu-central-1.amazonaws.com/back/Screenshot+2023-09-01+163436.png'
    ]}),
    Exercise.fill({id: 134, group: ExerciseType.Back, level: 14, title: 'Половинные мосты', video: '', iterations: 2, quantity: 15, mono: false, images: [
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/back/Screenshot+2023-09-01+163432.png', 'https://fit-static-cc.s3.eu-central-1.amazonaws.com/back/Screenshot+2023-09-01+163436.png'
    ]}),
    Exercise.fill({id: 135, group: ExerciseType.Back, level: 15, title: 'Половинные мосты', video: '', iterations: 2, quantity: 20, mono: false, images: [
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/back/Screenshot+2023-09-01+163432.png', 'https://fit-static-cc.s3.eu-central-1.amazonaws.com/back/Screenshot+2023-09-01+163436.png'
    ]}),

    Exercise.fill({id: 136, group: ExerciseType.Back, level: 16, title: 'Полные мосты', video: '', iterations: 1, quantity: 6, mono: false, images: [
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/back/Screenshot+2023-09-01+163442.png', 'https://fit-static-cc.s3.eu-central-1.amazonaws.com/back/Screenshot+2023-09-01+163446.png'
    ]}),
    Exercise.fill({id: 137, group: ExerciseType.Back, level: 17, title: 'Полные мосты', video: '', iterations: 2, quantity: 10, mono: false, images: [
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/back/Screenshot+2023-09-01+163442.png', 'https://fit-static-cc.s3.eu-central-1.amazonaws.com/back/Screenshot+2023-09-01+163446.png'
    ]}),
    Exercise.fill({id: 138, group: ExerciseType.Back, level: 18, title: 'Полные мосты', video: '', iterations: 2, quantity: 15, mono: false, images: [
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/back/Screenshot+2023-09-01+163442.png', 'https://fit-static-cc.s3.eu-central-1.amazonaws.com/back/Screenshot+2023-09-01+163446.png'
    ]}),

    Exercise.fill({id: 139, group: ExerciseType.Back, level: 19, title: 'Шагающие по стене мосты (вниз)', video: '', iterations: 1, quantity: 3, mono: true, images: [
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/back/Screenshot+2023-09-01+163453.png',
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/back/Screenshot+2023-09-01+163458.png',
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/back/Screenshot+2023-09-01+163503.png'
    ]}),
    Exercise.fill({id: 140, group: ExerciseType.Back, level: 20, title: 'Шагающие по стене мосты (вниз)', video: '', iterations: 2, quantity: 6, mono: true, images: [
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/back/Screenshot+2023-09-01+163453.png',
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/back/Screenshot+2023-09-01+163458.png',
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/back/Screenshot+2023-09-01+163503.png'
    ]}),
    Exercise.fill({id: 141, group: ExerciseType.Back, level: 21, title: 'Шагающие по стене мосты (вниз)', video: '', iterations: 2, quantity: 10, mono: true, images: [
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/back/Screenshot+2023-09-01+163453.png',
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/back/Screenshot+2023-09-01+163458.png',
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/back/Screenshot+2023-09-01+163503.png'
    ]}),

    Exercise.fill({id: 142, group: ExerciseType.Back, level: 22, title: 'Шагающие по стене мосты (вверх)', video: '', iterations: 1, quantity: 2, mono: true, images: [
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/back/Screenshot+2023-09-01+163514.png',
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/back/Screenshot+2023-09-01+163520.png',
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/back/Screenshot+2023-09-01+163530.png'
    ]}),
    Exercise.fill({id: 143, group: ExerciseType.Back, level: 23, title: 'Шагающие по стене мосты (вверх)', video: '', iterations: 2, quantity: 4, mono: true, images: [
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/back/Screenshot+2023-09-01+163514.png',
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/back/Screenshot+2023-09-01+163520.png',
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/back/Screenshot+2023-09-01+163530.png'
    ]}),
    Exercise.fill({id: 144, group: ExerciseType.Back, level: 24, title: 'Шагающие по стене мосты (вверх)', video: '', iterations: 2, quantity: 8, mono: true, images: [
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/back/Screenshot+2023-09-01+163514.png',
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/back/Screenshot+2023-09-01+163520.png',
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/back/Screenshot+2023-09-01+163530.png'
    ]}),

    Exercise.fill({id: 145, group: ExerciseType.Back, level: 25, title: 'Закрытые мосты', video: '', iterations: 1, quantity: 1, mono: true, images: [
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/back/Screenshot+2023-09-01+163537.png',
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/back/Screenshot+2023-09-01+163544.png',
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/back/Screenshot+2023-09-01+163550.png'
    ]}),
    Exercise.fill({id: 146, group: ExerciseType.Back, level: 26, title: 'Закрытые мосты', video: '', iterations: 2, quantity: 3, mono: true, images: [
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/back/Screenshot+2023-09-01+163537.png',
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/back/Screenshot+2023-09-01+163544.png',
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/back/Screenshot+2023-09-01+163550.png'
    ]}),
    Exercise.fill({id: 147, group: ExerciseType.Back, level: 27, title: 'Закрытые мосты', video: '', iterations: 2, quantity: 6, mono: true, images: [
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/back/Screenshot+2023-09-01+163537.png',
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/back/Screenshot+2023-09-01+163544.png',
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/back/Screenshot+2023-09-01+163550.png'
    ]}),

    Exercise.fill({id: 148, group: ExerciseType.Back, level: 28, title: 'Двухопорные мосты', video: '', iterations: 1, quantity: 1, mono: true, images: [
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/back/Screenshot+2023-09-01+163558.png',
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/back/Screenshot+2023-09-01+163604.png',
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/back/Screenshot+2023-09-01+163610.png'
    ]}),
    Exercise.fill({id: 149, group: ExerciseType.Back, level: 29, title: 'Двухопорные мосты', video: '', iterations: 2, quantity: 3, mono: true, images: [
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/back/Screenshot+2023-09-01+163558.png',
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/back/Screenshot+2023-09-01+163604.png',
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/back/Screenshot+2023-09-01+163610.png'
    ]}),
    Exercise.fill({id: 150, group: ExerciseType.Back, level: 30, title: 'Двухопорные мосты', video: '', iterations: 2, quantity: 30, mono: true, images: [
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/back/Screenshot+2023-09-01+163558.png',
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/back/Screenshot+2023-09-01+163604.png',
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/back/Screenshot+2023-09-01+163610.png'
    ]}),





    Exercise.fill({id: 151, group: ExerciseType.Shoulders, level: 1, title: 'Стойка на голове у стены', video: '', iterations: 1, quantity: 30, mono: false, time: 'sec', images: [
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/shoulders/Screenshot+2023-09-01+164424.png', 'https://fit-static-cc.s3.eu-central-1.amazonaws.com/shoulders/Screenshot+2023-09-01+164429.png'
    ]}),
    Exercise.fill({id: 152, group: ExerciseType.Shoulders, level: 2, title: 'Стойка на голове у стены', video: '', iterations: 1, quantity: 1, mono: false, time: 'min', images: [
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/shoulders/Screenshot+2023-09-01+164424.png', 'https://fit-static-cc.s3.eu-central-1.amazonaws.com/shoulders/Screenshot+2023-09-01+164429.png'
    ]}),
    Exercise.fill({id: 153, group: ExerciseType.Shoulders, level: 3, title: 'Стойка на голове у стены', video: '', iterations: 1, quantity: 2, mono: false, time: 'min', images: [
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/shoulders/Screenshot+2023-09-01+164424.png', 'https://fit-static-cc.s3.eu-central-1.amazonaws.com/shoulders/Screenshot+2023-09-01+164429.png'
    ]}),

    Exercise.fill({id: 154, group: ExerciseType.Shoulders, level: 4, title: 'Поза ворона', video: '', iterations: 1, quantity: 10, mono: false, time: 'sec', images: [
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/shoulders/Screenshot+2023-09-01+164437.png', 'https://fit-static-cc.s3.eu-central-1.amazonaws.com/shoulders/Screenshot+2023-09-01+164443.png'
    ]}),
    Exercise.fill({id: 155, group: ExerciseType.Shoulders, level: 5, title: 'Поза ворона', video: '', iterations: 1, quantity: 30, mono: false,  time: 'sec', images: [
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/shoulders/Screenshot+2023-09-01+164437.png', 'https://fit-static-cc.s3.eu-central-1.amazonaws.com/shoulders/Screenshot+2023-09-01+164443.png'
  ]}),
    Exercise.fill({id: 156, group: ExerciseType.Shoulders, level: 6, title: 'Поза ворона', video: '', iterations: 1, quantity: 60, mono: false, time: 'sec', images: [
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/shoulders/Screenshot+2023-09-01+164437.png', 'https://fit-static-cc.s3.eu-central-1.amazonaws.com/shoulders/Screenshot+2023-09-01+164443.png']}),

    Exercise.fill({id: 157, group: ExerciseType.Shoulders, level: 7, title: 'Стойка на руках у стены', video: '', iterations: 1, quantity: 30, mono: false, time: 'sec', images: [
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/shoulders/Screenshot+2023-09-01+164449.png', 'https://fit-static-cc.s3.eu-central-1.amazonaws.com/shoulders/Screenshot+2023-09-01+164454.png'
    ]}),
    Exercise.fill({id: 158, group: ExerciseType.Shoulders, level: 8, title: 'Стойка на руках у стены', video: '', iterations: 1, quantity: 1, mono: false, time: 'min', images: [
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/shoulders/Screenshot+2023-09-01+164449.png', 'https://fit-static-cc.s3.eu-central-1.amazonaws.com/shoulders/Screenshot+2023-09-01+164454.png'
    ]}),
    Exercise.fill({id: 159, group: ExerciseType.Shoulders, level: 9, title: 'Стойка на руках у стены', video: '', iterations: 1, quantity: 2, mono: false, time: 'min', images: [
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/shoulders/Screenshot+2023-09-01+164449.png', 'https://fit-static-cc.s3.eu-central-1.amazonaws.com/shoulders/Screenshot+2023-09-01+164454.png'
    ]}),

    Exercise.fill({id: 160, group: ExerciseType.Shoulders, level: 10, title: 'Частичные отжимания в стойке на руках', video: '', iterations: 1, quantity: 5, mono: false, images: [
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/shoulders/Screenshot+2023-09-01+164501.png', 'https://fit-static-cc.s3.eu-central-1.amazonaws.com/shoulders/Screenshot+2023-09-01+164506.png'
    ]}),
    Exercise.fill({id: 161, group: ExerciseType.Shoulders, level: 11, title: 'Частичные отжимания в стойке на руках', video: '', iterations: 2, quantity: 10, mono: false, images: [
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/shoulders/Screenshot+2023-09-01+164501.png', 'https://fit-static-cc.s3.eu-central-1.amazonaws.com/shoulders/Screenshot+2023-09-01+164506.png'
    ]}),
    Exercise.fill({id: 162, group: ExerciseType.Shoulders, level: 12, title: 'Частичные отжимания в стойке на руках', video: '', iterations: 2, quantity: 20, mono: false, images: [
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/shoulders/Screenshot+2023-09-01+164501.png', 'https://fit-static-cc.s3.eu-central-1.amazonaws.com/shoulders/Screenshot+2023-09-01+164506.png'
    ]}),

    Exercise.fill({id: 163, group: ExerciseType.Shoulders, level: 13, title: 'Отжимания в стойке на руках', video: '', iterations: 1, quantity: 5, mono: false, images: [
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/shoulders/Screenshot+2023-09-01+164517.png', 'https://fit-static-cc.s3.eu-central-1.amazonaws.com/shoulders/Screenshot+2023-09-01+164523.png'
    ]}),
    Exercise.fill({id: 164, group: ExerciseType.Shoulders, level: 14, title: 'Отжимания в стойке на руках', video: '', iterations: 2, quantity: 10, mono: false, images: [
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/shoulders/Screenshot+2023-09-01+164517.png', 'https://fit-static-cc.s3.eu-central-1.amazonaws.com/shoulders/Screenshot+2023-09-01+164523.png'
    ]}),
    Exercise.fill({id: 165, group: ExerciseType.Shoulders, level: 15, title: 'Отжимания в стойке на руках', video: '', iterations: 2, quantity: 15, mono: false, images: [
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/shoulders/Screenshot+2023-09-01+164517.png', 'https://fit-static-cc.s3.eu-central-1.amazonaws.com/shoulders/Screenshot+2023-09-01+164523.png'
    ]}),

    Exercise.fill({id: 166, group: ExerciseType.Shoulders, level: 16, title: 'Закрытые отжимания в стойке на руках', video: '', iterations: 1, quantity: 5, mono: false, images: [
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/shoulders/Screenshot+2023-09-01+164531.png', 'https://fit-static-cc.s3.eu-central-1.amazonaws.com/shoulders/Screenshot+2023-09-01+164538.png'
    ]}),
    Exercise.fill({id: 167, group: ExerciseType.Shoulders, level: 17, title: 'Закрытые отжимания в стойке на руках', video: '', iterations: 2, quantity: 9, mono: false, images: [
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/shoulders/Screenshot+2023-09-01+164531.png', 'https://fit-static-cc.s3.eu-central-1.amazonaws.com/shoulders/Screenshot+2023-09-01+164538.png'
    ]}),
    Exercise.fill({id: 168, group: ExerciseType.Shoulders, level: 18, title: 'Закрытые отжимания в стойке на руках', video: '', iterations: 2, quantity: 12, mono: false, images: [
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/shoulders/Screenshot+2023-09-01+164531.png', 'https://fit-static-cc.s3.eu-central-1.amazonaws.com/shoulders/Screenshot+2023-09-01+164538.png'
    ]}),

    Exercise.fill({id: 169, group: ExerciseType.Shoulders, level: 19, title: 'Неравномерные отжимания в стойке на руках', video: '', iterations: 1, quantity: 5, mono: true, images: [
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/shoulders/Screenshot+2023-09-01+164544.png', 'https://fit-static-cc.s3.eu-central-1.amazonaws.com/shoulders/Screenshot+2023-09-01+164550.png'
    ]}),
    Exercise.fill({id: 170, group: ExerciseType.Shoulders, level: 20, title: 'Неравномерные отжимания в стойке на руках', video: '', iterations: 2, quantity: 8, mono: true, images: [
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/shoulders/Screenshot+2023-09-01+164544.png', 'https://fit-static-cc.s3.eu-central-1.amazonaws.com/shoulders/Screenshot+2023-09-01+164550.png'
    ]}),
    Exercise.fill({id: 171, group: ExerciseType.Shoulders, level: 21, title: 'Неравномерные отжимания в стойке на руках', video: '', iterations: 2, quantity: 10, mono: true, images: [
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/shoulders/Screenshot+2023-09-01+164544.png', 'https://fit-static-cc.s3.eu-central-1.amazonaws.com/shoulders/Screenshot+2023-09-01+164550.png'
    ]}),

    Exercise.fill({id: 172, group: ExerciseType.Shoulders, level: 22, title: 'Половинные отжимания в стойке на одной руке', video: '', iterations: 1, quantity: 4, mono: true, images: [
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/shoulders/Screenshot+2023-09-01+164558.png', 'https://fit-static-cc.s3.eu-central-1.amazonaws.com/shoulders/Screenshot+2023-09-01+164606.png'
    ]}),
    Exercise.fill({id: 173, group: ExerciseType.Shoulders, level: 23, title: 'Половинные отжимания в стойке на одной руке', video: '', iterations: 2, quantity: 6, mono: true, images: [
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/shoulders/Screenshot+2023-09-01+164558.png', 'https://fit-static-cc.s3.eu-central-1.amazonaws.com/shoulders/Screenshot+2023-09-01+164606.png'
    ]}),
    Exercise.fill({id: 174, group: ExerciseType.Shoulders, level: 24, title: 'Половинные отжимания в стойке на одной руке', video: '', iterations: 2, quantity: 8, mono: true, images: [
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/shoulders/Screenshot+2023-09-01+164558.png', 'https://fit-static-cc.s3.eu-central-1.amazonaws.com/shoulders/Screenshot+2023-09-01+164606.png'
    ]}),

    Exercise.fill({id: 175, group: ExerciseType.Shoulders, level: 25, title: 'Рычажные отжимания в стойке на руках', video: '', iterations: 1, quantity: 3, mono: true, images: [
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/shoulders/Screenshot+2023-09-01+164613.png', 'https://fit-static-cc.s3.eu-central-1.amazonaws.com/shoulders/Screenshot+2023-09-01+164618.png'
    ]}),
    Exercise.fill({id: 176, group: ExerciseType.Shoulders, level: 26, title: 'Рычажные отжимания в стойке на руках', video: '', iterations: 2, quantity: 4, mono: true, images: [
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/shoulders/Screenshot+2023-09-01+164613.png', 'https://fit-static-cc.s3.eu-central-1.amazonaws.com/shoulders/Screenshot+2023-09-01+164618.png'
    ]}),
    Exercise.fill({id: 177, group: ExerciseType.Shoulders, level: 27, title: 'Рычажные отжимания в стойке на руках', video: '', iterations: 2, quantity: 6, mono: true, images: [
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/shoulders/Screenshot+2023-09-01+164613.png', 'https://fit-static-cc.s3.eu-central-1.amazonaws.com/shoulders/Screenshot+2023-09-01+164618.png'
    ]}),

    Exercise.fill({id: 178, group: ExerciseType.Shoulders, level: 28, title: 'Отжимания в стойке на одной руке', video: '', iterations: 1, quantity: 1, mono: true, images: [
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/shoulders/Screenshot+2023-09-01+164625.png', 'https://fit-static-cc.s3.eu-central-1.amazonaws.com/shoulders/Screenshot+2023-09-01+164630.png'
    ]}),
    Exercise.fill({id: 179, group: ExerciseType.Shoulders, level: 29, title: 'Отжимания в стойке на одной руке', video: '', iterations: 2, quantity: 2, mono: true, images: [
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/shoulders/Screenshot+2023-09-01+164625.png', 'https://fit-static-cc.s3.eu-central-1.amazonaws.com/shoulders/Screenshot+2023-09-01+164630.png'
    ]}),
    Exercise.fill({id: 180, group: ExerciseType.Shoulders, level: 30, title: 'Отжимания в стойке на одной руке', video: '', iterations: 2, quantity: 5, mono: true, images: [
      'https://fit-static-cc.s3.eu-central-1.amazonaws.com/shoulders/Screenshot+2023-09-01+164625.png', 'https://fit-static-cc.s3.eu-central-1.amazonaws.com/shoulders/Screenshot+2023-09-01+164630.png'
    ]}),
  ])

  constructor() { }

  getExercises(): Exercises {
    return this.exercises
  }

  getById(id: number): Exercise {
    return this.exercises.getAll().filter(x => x.id === id)[0];
  }
}

class Exercises {
  constructor(private exercises: Exercise[]) {
  }

  getAll() {
    return this.exercises;
  }

  getNext(e: Exercise): Exercise {
    return this.exercises.filter(x => {
      const match = x.group === e.group && e.level +1 === x.level
      return match;
    })[0];
  }

  getLevels() {
    return this.getLegs().getLevels();
  }

  getLegs(): ExercisesGroup {
    return new ExercisesGroup(this.exercises.filter(x => x.group === ExerciseType.Legs))
  }

  getShoulders(): ExercisesGroup {
    return new ExercisesGroup(this.exercises.filter(x => x.group === ExerciseType.Shoulders))
  } 

  getPress(): ExercisesGroup {
    return new ExercisesGroup(this.exercises.filter(x => x.group === ExerciseType.Press))
  }

  getPullUps(): ExercisesGroup {
    return new ExercisesGroup(this.exercises.filter(x => x.group === ExerciseType.PullUps))
  }

  getPushUps(): ExercisesGroup {
    return new ExercisesGroup(this.exercises.filter(x => x.group === ExerciseType.PushUps))
  }

  getBack(): ExercisesGroup {
    return new ExercisesGroup(this.exercises.filter(x => x.group === ExerciseType.Back))
  }

}

class ExercisesGroup {
  exercises: Exercise[] = [];
  constructor(exercises: Exercise[]) {
    this.exercises = exercises;
  }
  getLevel(level: number) {
    const l = this.exercises.filter(x => x.level === level)
    return l[0];
  }

  getLevels() {
    return this.exercises[this.exercises.length - 1].level;
  }
}