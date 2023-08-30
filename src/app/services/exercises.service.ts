import { Injectable } from '@angular/core';
import { Exercise, ExerciseType } from '../models/exercise';



@Injectable({
  providedIn: 'root'
})
export class ExercisesService {

  exercises: Exercises = new Exercises([
    {id: 1, group: ExerciseType.PushUps, level: 1, title: 'Отжимания от стены', video: '', iterations: 1, quantity: 10, mono: false},
    {id: 2, group: ExerciseType.PushUps, level: 2, title: 'Отжимания от стены', video: '', iterations: 2, quantity: 25, mono: false},
    {id: 3, group: ExerciseType.PushUps, level: 3, title: 'Отжимания от стены', video: '', iterations: 3, quantity: 50, mono: false},

    {id: 4, group: ExerciseType.PushUps, level: 4, title: 'Наклонные отжимания', video: '', iterations: 1, quantity: 10, mono: false},
    {id: 5, group: ExerciseType.PushUps, level: 5, title: 'Наклонные отжимания', video: '', iterations: 2, quantity: 20, mono: false},
    {id: 6, group: ExerciseType.PushUps, level: 6, title: 'Наклонные отжимания', video: '', iterations: 3, quantity: 40, mono: false},

    {id: 7, group: ExerciseType.PushUps, level: 7, title: 'Отжимания на коленях', video: '', iterations: 1, quantity: 10, mono: false},
    {id: 8, group: ExerciseType.PushUps, level: 8, title: 'Отжимания на коленях', video: '', iterations: 2, quantity: 15, mono: false},
    {id: 9, group: ExerciseType.PushUps, level: 9, title: 'Отжимания на коленях', video: '', iterations: 3, quantity: 30, mono: false},

    {id: 10, group: ExerciseType.PushUps, level: 10, title: 'Половинные отжимания', video: '', iterations: 1, quantity: 8, mono: false},
    {id: 11, group: ExerciseType.PushUps, level: 11, title: 'Половинные отжимания', video: '', iterations: 2, quantity: 12, mono: false},
    {id: 12, group: ExerciseType.PushUps, level: 12, title: 'Половинные отжимания', video: '', iterations: 2, quantity: 25, mono: false},

    {id: 13, group: ExerciseType.PushUps, level: 13, title: 'Полные отжимания', video: '', iterations: 1, quantity: 5, mono: false},
    {id: 14, group: ExerciseType.PushUps, level: 14, title: 'Полные отжимания', video: '', iterations: 2, quantity: 10, mono: false},
    {id: 15, group: ExerciseType.PushUps, level: 15, title: 'Полные отжимания', video: '', iterations: 2, quantity: 20, mono: false},

    {id: 16, group: ExerciseType.PushUps, level: 16, title: 'Плотные отжимания', video: '', iterations: 1, quantity: 5, mono: false},
    {id: 17, group: ExerciseType.PushUps, level: 17, title: 'Плотные отжимания', video: '', iterations: 2, quantity: 10, mono: false},
    {id: 18, group: ExerciseType.PushUps, level: 18, title: 'Плотные отжимания', video: '', iterations: 2, quantity: 20, mono: false},

    {id: 19, group: ExerciseType.PushUps, level: 19, title: 'Неравномерные отжимания', video: '', iterations: 1, quantity: 5, mono: true},
    {id: 20, group: ExerciseType.PushUps, level: 20, title: 'Неравномерные отжимания', video: '', iterations: 2, quantity: 10, mono: true},
    {id: 21, group: ExerciseType.PushUps, level: 21, title: 'Неравномерные отжимания', video: '', iterations: 2, quantity: 20, mono: true},

    {id: 22, group: ExerciseType.PushUps, level: 22, title: 'Половинные отжимания на одной руке', video: '', iterations: 1, quantity: 5, mono: true},
    {id: 23, group: ExerciseType.PushUps, level: 23, title: 'Половинные отжимания на одной руке', video: '', iterations: 2, quantity: 10, mono: true},
    {id: 24, group: ExerciseType.PushUps, level: 24, title: 'Половинные отжимания на одной руке', video: '', iterations: 2, quantity: 20, mono: true},

    {id: 25, group: ExerciseType.PushUps, level: 25, title: 'Рычажные отжимания', video: '', iterations: 1, quantity: 5, mono: true},
    {id: 26, group: ExerciseType.PushUps, level: 26, title: 'Рычажные отжимания', video: '', iterations: 2, quantity: 10, mono: true},
    {id: 27, group: ExerciseType.PushUps, level: 27, title: 'Рычажные отжимания', video: '', iterations: 2, quantity: 20, mono: true},

    {id: 28, group: ExerciseType.PushUps, level: 28, title: 'Отжимания на одной руке', video: '', iterations: 1, quantity: 5, mono: true},
    {id: 29, group: ExerciseType.PushUps, level: 29, title: 'Отжимания на одной руке', video: '', iterations: 2, quantity: 10, mono: true},
    {id: 30, group: ExerciseType.PushUps, level: 30, title: 'Отжимания на одной руке', video: '', iterations: 1, quantity: 100, mono: true},

    



    {id: 31, group: ExerciseType.Legs, level: 1, title: 'Плечи на полу', video: '', iterations: 1, quantity: 10, mono: false},
    {id: 32, group: ExerciseType.Legs, level: 2, title: 'Плечи на полу', video: '', iterations: 2, quantity: 25, mono: false},
    {id: 33, group: ExerciseType.Legs, level: 3, title: 'Плечи на полу', video: '', iterations: 3, quantity: 50, mono: false},

    {id: 34, group: ExerciseType.Legs, level: 4, title: 'Приседания "складной ножик"', video: '', iterations: 1, quantity: 10, mono: false},
    {id: 35, group: ExerciseType.Legs, level: 5, title: 'Приседания "складной ножик"', video: '', iterations: 2, quantity: 20, mono: false},
    {id: 36, group: ExerciseType.Legs, level: 6, title: 'Приседания "складной ножик"', video: '', iterations: 3, quantity: 40, mono: false},

    {id: 37, group: ExerciseType.Legs, level: 7, title: 'Поддержаный присед', video: '', iterations: 1, quantity: 10, mono: false},
    {id: 38, group: ExerciseType.Legs, level: 8, title: 'Поддержаный присед', video: '', iterations: 2, quantity: 15, mono: false},
    {id: 39, group: ExerciseType.Legs, level: 9, title: 'Поддержаный присед', video: '', iterations: 3, quantity: 30, mono: false},

    {id: 40, group: ExerciseType.Legs, level: 10, title: 'Полуприсяд', video: '', iterations: 1, quantity: 8, mono: false},
    {id: 41, group: ExerciseType.Legs, level: 11, title: 'Полуприсяд', video: '', iterations: 2, quantity: 35, mono: false},
    {id: 42, group: ExerciseType.Legs, level: 12, title: 'Полуприсяд', video: '', iterations: 2, quantity: 50, mono: false},

    {id: 43, group: ExerciseType.Legs, level: 13, title: 'Полные приседания', video: '', iterations: 1, quantity: 5, mono: false},
    {id: 44, group: ExerciseType.Legs, level: 14, title: 'Полные приседания', video: '', iterations: 2, quantity: 10, mono: false},
    {id: 45, group: ExerciseType.Legs, level: 15, title: 'Полные приседания', video: '', iterations: 2, quantity: 30, mono: false},

    {id: 46, group: ExerciseType.Legs, level: 16, title: 'Закрытые приседания', video: '', iterations: 1, quantity: 5, mono: false},
    {id: 47, group: ExerciseType.Legs, level: 17, title: 'Закрытые приседания', video: '', iterations: 2, quantity: 10, mono: false},
    {id: 48, group: ExerciseType.Legs, level: 18, title: 'Закрытые приседания', video: '', iterations: 2, quantity: 20, mono: false},

    {id: 49, group: ExerciseType.Legs, level: 19, title: 'Неравномерные приседания', video: '', iterations: 1, quantity: 5, mono: true},
    {id: 50, group: ExerciseType.Legs, level: 20, title: 'Неравномерные приседания', video: '', iterations: 2, quantity: 10, mono: true},
    {id: 51, group: ExerciseType.Legs, level: 21, title: 'Неравномерные приседания', video: '', iterations: 2, quantity: 20, mono: true},

    {id: 52, group: ExerciseType.Legs, level: 22, title: 'Половинные приседания на одной ноге', video: '', iterations: 1, quantity: 5, mono: true},
    {id: 53, group: ExerciseType.Legs, level: 23, title: 'Половинные приседания на одной ноге', video: '', iterations: 2, quantity: 10, mono: true},
    {id: 54, group: ExerciseType.Legs, level: 24, title: 'Половинные приседания на одной ноге', video: '', iterations: 2, quantity: 20, mono: true},

    {id: 55, group: ExerciseType.Legs, level: 25, title: 'Приседания на одной ноге с поддержкой', video: '', iterations: 1, quantity: 5, mono: true},
    {id: 56, group: ExerciseType.Legs, level: 26, title: 'Приседания на одной ноге с поддержкой', video: '', iterations: 2, quantity: 10, mono: true},
    {id: 57, group: ExerciseType.Legs, level: 27, title: 'Приседания на одной ноге с поддержкой', video: '', iterations: 2, quantity: 20, mono: true},

    {id: 58, group: ExerciseType.Legs, level: 28, title: 'Приседания на одной ноге', video: '', iterations: 1, quantity: 5, mono: true},
    {id: 59, group: ExerciseType.Legs, level: 29, title: 'Приседания на одной ноге', video: '', iterations: 2, quantity: 10, mono: true},
    {id: 60, group: ExerciseType.Legs, level: 30, title: 'Приседания на одной ноге', video: '', iterations: 2, quantity: 50, mono: true},





    {id: 61, group: ExerciseType.PullUps, level: 1, title: 'Вертикальное подтягивание', video: '', iterations: 1, quantity: 10, mono: false},
    {id: 62, group: ExerciseType.PullUps, level: 2, title: 'Вертикальное подтягивание', video: '', iterations: 2, quantity: 25, mono: false},
    {id: 63, group: ExerciseType.PullUps, level: 3, title: 'Вертикальное подтягивание', video: '', iterations: 3, quantity: 40, mono: false},

    {id: 64, group: ExerciseType.PullUps, level: 4, title: 'Горизонтальное подтягивание', video: '', iterations: 1, quantity: 10, mono: false},
    {id: 65, group: ExerciseType.PullUps, level: 5, title: 'Горизонтальное подтягивание', video: '', iterations: 2, quantity: 20, mono: false},
    {id: 66, group: ExerciseType.PullUps, level: 6, title: 'Горизонтальное подтягивание', video: '', iterations: 3, quantity: 30, mono: false},

    {id: 67, group: ExerciseType.PullUps, level: 7, title: 'Подтягивание "перочинный нож"', video: '', iterations: 1, quantity: 10, mono: false},
    {id: 68, group: ExerciseType.PullUps, level: 8, title: 'Подтягивание "перочинный нож"', video: '', iterations: 2, quantity: 15, mono: false},
    {id: 69, group: ExerciseType.PullUps, level: 9, title: 'Подтягивание "перочинный нож"', video: '', iterations: 3, quantity: 20, mono: false},

    {id: 70, group: ExerciseType.PullUps, level: 10, title: 'Полуподтягивания', video: '', iterations: 1, quantity: 8, mono: false},
    {id: 71, group: ExerciseType.PullUps, level: 11, title: 'Полуподтягивания', video: '', iterations: 2, quantity: 11, mono: false},
    {id: 72, group: ExerciseType.PullUps, level: 12, title: 'Полуподтягивания', video: '', iterations: 2, quantity: 15, mono: false},

    {id: 73, group: ExerciseType.PullUps, level: 13, title: 'Полное подтягивание', video: '', iterations: 1, quantity: 5, mono: false},
    {id: 74, group: ExerciseType.PullUps, level: 14, title: 'Полное подтягивание', video: '', iterations: 2, quantity: 8, mono: false},
    {id: 75, group: ExerciseType.PullUps, level: 15, title: 'Полное подтягивание', video: '', iterations: 2, quantity: 10, mono: false},

    {id: 76, group: ExerciseType.PullUps, level: 16, title: 'Подтягивания узким хватом', video: '', iterations: 1, quantity: 5, mono: false},
    {id: 77, group: ExerciseType.PullUps, level: 17, title: 'Подтягивания узким хватом', video: '', iterations: 2, quantity: 8, mono: false},
    {id: 78, group: ExerciseType.PullUps, level: 18, title: 'Подтягивания узким хватом', video: '', iterations: 2, quantity: 10, mono: false},

    {id: 79, group: ExerciseType.PullUps, level: 19, title: 'Неравные подтягивания', video: '', iterations: 1, quantity: 5, mono: true},
    {id: 80, group: ExerciseType.PullUps, level: 20, title: 'Неравные подтягивания', video: '', iterations: 2, quantity: 7, mono: true},
    {id: 81, group: ExerciseType.PullUps, level: 21, title: 'Неравные подтягивания', video: '', iterations: 2, quantity: 9, mono: true},

    {id: 82, group: ExerciseType.PullUps, level: 22, title: 'Половинные подтягивания на одной руке', video: '', iterations: 1, quantity: 4, mono: true},
    {id: 83, group: ExerciseType.PullUps, level: 23, title: 'Половинные подтягивания на одной руке', video: '', iterations: 2, quantity: 6, mono: true},
    {id: 84, group: ExerciseType.PullUps, level: 24, title: 'Половинные подтягивания на одной руке', video: '', iterations: 2, quantity: 8, mono: true},

    {id: 85, group: ExerciseType.PullUps, level: 25, title: 'Ассистированные подтягивания на одной руке', video: '', iterations: 1, quantity: 3, mono: true},
    {id: 86, group: ExerciseType.PullUps, level: 26, title: 'Ассистированные подтягивания на одной руке', video: '', iterations: 2, quantity: 5, mono: true},
    {id: 87, group: ExerciseType.PullUps, level: 27, title: 'Ассистированные подтягивания на одной руке', video: '', iterations: 2, quantity: 7, mono: true},

    {id: 88, group: ExerciseType.PullUps, level: 28, title: 'Подтягивания на одной руке', video: '', iterations: 1, quantity: 1, mono: true},
    {id: 89, group: ExerciseType.PullUps, level: 29, title: 'Подтягивания на одной руке', video: '', iterations: 2, quantity: 3, mono: true},
    {id: 90, group: ExerciseType.PullUps, level: 30, title: 'Подтягивания на одной руке', video: '', iterations: 2, quantity: 6, mono: true},





    {id: 91, group: ExerciseType.Press, level: 1, title: 'Подтягивание колен к животу', video: '', iterations: 1, quantity: 10, mono: false},
    {id: 92, group: ExerciseType.Press, level: 2, title: 'Подтягивание колен к животу', video: '', iterations: 2, quantity: 25, mono: false},
    {id: 93, group: ExerciseType.Press, level: 3, title: 'Подтягивание колен к животу', video: '', iterations: 3, quantity: 40, mono: false},

    {id: 94, group: ExerciseType.Press, level: 4, title: 'Подьемы коленей лежа', video: '', iterations: 1, quantity: 10, mono: false},
    {id: 95, group: ExerciseType.Press, level: 5, title: 'Подьемы коленей лежа', video: '', iterations: 2, quantity: 20, mono: false},
    {id: 96, group: ExerciseType.Press, level: 6, title: 'Подьемы коленей лежа', video: '', iterations: 3, quantity: 35, mono: false},

    {id: 97, group: ExerciseType.Press, level: 7, title: 'Подьемы согнутых коленей лежа', video: '', iterations: 1, quantity: 10, mono: false},
    {id: 98, group: ExerciseType.Press, level: 8, title: 'Подьемы согнутых коленей лежа', video: '', iterations: 2, quantity: 15, mono: false},
    {id: 99, group: ExerciseType.Press, level: 9, title: 'Подьемы согнутых коленей лежа', video: '', iterations: 3, quantity: 30, mono: false},

    {id: 100, group: ExerciseType.Press, level: 10, title: 'Лягушачьи подьёмы лёжа', video: '', iterations: 1, quantity: 8, mono: false},
    {id: 101, group: ExerciseType.Press, level: 11, title: 'Лягушачьи подьёмы лёжа', video: '', iterations: 2, quantity: 15, mono: false},
    {id: 102, group: ExerciseType.Press, level: 12, title: 'Лягушачьи подьёмы лёжа', video: '', iterations: 3, quantity: 25, mono: false},

    {id: 103, group: ExerciseType.Press, level: 13, title: 'Ровные прямые подьемы ног', video: '', iterations: 1, quantity: 5, mono: false},
    {id: 104, group: ExerciseType.Press, level: 14, title: 'Ровные прямые подьемы ног', video: '', iterations: 2, quantity: 10, mono: false},
    {id: 105, group: ExerciseType.Press, level: 15, title: 'Ровные прямые подьемы ног', video: '', iterations: 2, quantity: 20, mono: false},

    {id: 106, group: ExerciseType.Press, level: 16, title: 'Подъемы коленей из виса на перекладине', video: '', iterations: 1, quantity: 5, mono: false},
    {id: 107, group: ExerciseType.Press, level: 17, title: 'Подъемы коленей из виса на перекладине', video: '', iterations: 2, quantity: 10, mono: false},
    {id: 108, group: ExerciseType.Press, level: 18, title: 'Подъемы коленей из виса на перекладине', video: '', iterations: 2, quantity: 15, mono: false},

    {id: 109, group: ExerciseType.Press, level: 19, title: 'Подъем согнутой ногой', video: '', iterations: 1, quantity: 5, mono: false},
    {id: 110, group: ExerciseType.Press, level: 20, title: 'Подъем согнутой ногой', video: '', iterations: 2, quantity: 10, mono: false},
    {id: 111, group: ExerciseType.Press, level: 21, title: 'Подъем согнутой ногой', video: '', iterations: 2, quantity: 15, mono: false},

    {id: 112, group: ExerciseType.Press, level: 22, title: 'Висячие подъемы лягушкой', video: '', iterations: 1, quantity: 5, mono: false},
    {id: 113, group: ExerciseType.Press, level: 23, title: 'Висячие подъемы лягушкой', video: '', iterations: 2, quantity: 10, mono: false},
    {id: 114, group: ExerciseType.Press, level: 24, title: 'Висячие подъемы лягушкой', video: '', iterations: 2, quantity: 15, mono: false},

    {id: 115, group: ExerciseType.Press, level: 25, title: 'Подъемы частично прямой ноги', video: '', iterations: 1, quantity: 5, mono: false},
    {id: 116, group: ExerciseType.Press, level: 26, title: 'Подъемы частично прямой ноги', video: '', iterations: 2, quantity: 10, mono: false},
    {id: 117, group: ExerciseType.Press, level: 27, title: 'Подъемы частично прямой ноги', video: '', iterations: 2, quantity: 15, mono: false},

    {id: 118, group: ExerciseType.Press, level: 28, title: 'Подъем прямых ног в висе', video: '', iterations: 1, quantity: 5, mono: false},
    {id: 119, group: ExerciseType.Press, level: 29, title: 'Подъем прямых ног в висе', video: '', iterations: 2, quantity: 10, mono: false},
    {id: 120, group: ExerciseType.Press, level: 30, title: 'Подъем прямых ног в висе', video: '', iterations: 2, quantity: 30, mono: false},





    {id: 121, group: ExerciseType.Back, level: 1, title: 'Короткие мосты', video: '', iterations: 1, quantity: 10, mono: false},
    {id: 122, group: ExerciseType.Back, level: 2, title: 'Короткие мосты', video: '', iterations: 2, quantity: 25, mono: false},
    {id: 123, group: ExerciseType.Back, level: 3, title: 'Короткие мосты', video: '', iterations: 3, quantity: 50, mono: false},

    {id: 124, group: ExerciseType.Back, level: 4, title: 'Ровные мосты', video: '', iterations: 1, quantity: 10, mono: false},
    {id: 125, group: ExerciseType.Back, level: 5, title: 'Ровные мосты', video: '', iterations: 2, quantity: 20, mono: false},
    {id: 126, group: ExerciseType.Back, level: 6, title: 'Ровные мосты', video: '', iterations: 3, quantity: 40, mono: false},

    {id: 127, group: ExerciseType.Back, level: 7, title: 'Мосты под углом', video: '', iterations: 1, quantity: 8, mono: false},
    {id: 128, group: ExerciseType.Back, level: 8, title: 'Мосты под углом', video: '', iterations: 2, quantity: 15, mono: false},
    {id: 129, group: ExerciseType.Back, level: 9, title: 'Мосты под углом', video: '', iterations: 3, quantity: 30, mono: false},

    {id: 130, group: ExerciseType.Back, level: 10, title: 'Мосты на голове', video: '', iterations: 1, quantity: 8, mono: false},
    {id: 131, group: ExerciseType.Back, level: 11, title: 'Мосты на голове', video: '', iterations: 2, quantity: 15, mono: false},
    {id: 132, group: ExerciseType.Back, level: 12, title: 'Мосты на голове', video: '', iterations: 2, quantity: 25, mono: false},

    {id: 133, group: ExerciseType.Back, level: 13, title: 'Половинные мосты', video: '', iterations: 1, quantity: 8, mono: false},
    {id: 134, group: ExerciseType.Back, level: 14, title: 'Половинные мосты', video: '', iterations: 2, quantity: 15, mono: false},
    {id: 135, group: ExerciseType.Back, level: 15, title: 'Половинные мосты', video: '', iterations: 2, quantity: 20, mono: false},

    {id: 136, group: ExerciseType.Back, level: 16, title: 'Полные мосты', video: '', iterations: 1, quantity: 6, mono: false},
    {id: 137, group: ExerciseType.Back, level: 17, title: 'Полные мосты', video: '', iterations: 2, quantity: 10, mono: false},
    {id: 138, group: ExerciseType.Back, level: 18, title: 'Полные мосты', video: '', iterations: 2, quantity: 15, mono: false},

    {id: 139, group: ExerciseType.Back, level: 19, title: 'Шагающие по стене мосты (вниз)', video: '', iterations: 1, quantity: 3, mono: true},
    {id: 140, group: ExerciseType.Back, level: 20, title: 'Шагающие по стене мосты (вниз)', video: '', iterations: 2, quantity: 6, mono: true},
    {id: 141, group: ExerciseType.Back, level: 21, title: 'Шагающие по стене мосты (вниз)', video: '', iterations: 2, quantity: 10, mono: true},

    {id: 142, group: ExerciseType.Back, level: 22, title: 'Шагающие по стене мосты (вверх)', video: '', iterations: 1, quantity: 2, mono: true},
    {id: 143, group: ExerciseType.Back, level: 23, title: 'Шагающие по стене мосты (вверх)', video: '', iterations: 2, quantity: 4, mono: true},
    {id: 144, group: ExerciseType.Back, level: 24, title: 'Шагающие по стене мосты (вверх)', video: '', iterations: 2, quantity: 8, mono: true},

    {id: 145, group: ExerciseType.Back, level: 25, title: 'Закрытые мосты', video: '', iterations: 1, quantity: 1, mono: true},
    {id: 146, group: ExerciseType.Back, level: 26, title: 'Закрытые мосты', video: '', iterations: 2, quantity: 3, mono: true},
    {id: 147, group: ExerciseType.Back, level: 27, title: 'Закрытые мосты', video: '', iterations: 2, quantity: 6, mono: true},

    {id: 148, group: ExerciseType.Back, level: 28, title: 'Двухопорные мосты', video: '', iterations: 1, quantity: 1, mono: true},
    {id: 149, group: ExerciseType.Back, level: 29, title: 'Двухопорные мосты', video: '', iterations: 2, quantity: 3, mono: true},
    {id: 150, group: ExerciseType.Back, level: 30, title: 'Двухопорные мосты', video: '', iterations: 2, quantity: 30, mono: true},





    {id: 151, group: ExerciseType.Shoulders, level: 1, title: 'Стойка на голове у стены', video: '', iterations: 1, quantity: 30, mono: false, time: 'sec'},
    {id: 152, group: ExerciseType.Shoulders, level: 2, title: 'Стойка на голове у стены', video: '', iterations: 1, quantity: 1, mono: false, time: 'min'},
    {id: 153, group: ExerciseType.Shoulders, level: 3, title: 'Стойка на голове у стены', video: '', iterations: 1, quantity: 2, mono: false, time: 'min'},

    {id: 154, group: ExerciseType.Shoulders, level: 4, title: 'Поза ворона', video: '', iterations: 1, quantity: 10, mono: false, time: 'sec', images: ['https://fit-static-cc.s3.eu-central-1.amazonaws.com/Screenshot+2023-08-30+174914.png', 'https://fit-static-cc.s3.eu-central-1.amazonaws.com/Screenshot+2023-08-30+174751.png']},
    {id: 155, group: ExerciseType.Shoulders, level: 5, title: 'Поза ворона', video: '', iterations: 1, quantity: 30, mono: false, time: 'sec', images: ['https://fit-static-cc.s3.eu-central-1.amazonaws.com/Screenshot+2023-08-30+174914.png', 'https://fit-static-cc.s3.eu-central-1.amazonaws.com/Screenshot+2023-08-30+174751.png']},
    {id: 156, group: ExerciseType.Shoulders, level: 6, title: 'Поза ворона', video: '', iterations: 1, quantity: 60, mono: false, time: 'sec', images: ['https://fit-static-cc.s3.eu-central-1.amazonaws.com/Screenshot+2023-08-30+174914.png', 'https://fit-static-cc.s3.eu-central-1.amazonaws.com/Screenshot+2023-08-30+174751.png']},

    {id: 157, group: ExerciseType.Shoulders, level: 7, title: 'Стойка на руках у стены', video: '', iterations: 1, quantity: 30, mono: false, time: 'sec'},
    {id: 158, group: ExerciseType.Shoulders, level: 8, title: 'Стойка на руках у стены', video: '', iterations: 1, quantity: 1, mono: false, time: 'min'},
    {id: 159, group: ExerciseType.Shoulders, level: 9, title: 'Стойка на руках у стены', video: '', iterations: 1, quantity: 2, mono: false, time: 'min'},

    {id: 160, group: ExerciseType.Shoulders, level: 10, title: 'Частичные отжимания в стойке на руках', video: '', iterations: 1, quantity: 5, mono: false},
    {id: 161, group: ExerciseType.Shoulders, level: 11, title: 'Частичные отжимания в стойке на руках', video: '', iterations: 2, quantity: 10, mono: false},
    {id: 162, group: ExerciseType.Shoulders, level: 12, title: 'Частичные отжимания в стойке на руках', video: '', iterations: 2, quantity: 20, mono: false},

    {id: 163, group: ExerciseType.Shoulders, level: 13, title: 'Отжимания в стойке на руках', video: '', iterations: 1, quantity: 5, mono: false},
    {id: 164, group: ExerciseType.Shoulders, level: 14, title: 'Отжимания в стойке на руках', video: '', iterations: 2, quantity: 10, mono: false},
    {id: 165, group: ExerciseType.Shoulders, level: 15, title: 'Отжимания в стойке на руках', video: '', iterations: 2, quantity: 15, mono: false},

    {id: 166, group: ExerciseType.Shoulders, level: 16, title: 'Закрытые отжимания в стойке на руках', video: '', iterations: 1, quantity: 5, mono: false},
    {id: 167, group: ExerciseType.Shoulders, level: 17, title: 'Закрытые отжимания в стойке на руках', video: '', iterations: 2, quantity: 9, mono: false},
    {id: 168, group: ExerciseType.Shoulders, level: 18, title: 'Закрытые отжимания в стойке на руках', video: '', iterations: 2, quantity: 12, mono: false},

    {id: 169, group: ExerciseType.Shoulders, level: 19, title: 'Неравномерные отжимания в стойке на руках', video: '', iterations: 1, quantity: 5, mono: true},
    {id: 170, group: ExerciseType.Shoulders, level: 20, title: 'Неравномерные отжимания в стойке на руках', video: '', iterations: 2, quantity: 8, mono: true},
    {id: 171, group: ExerciseType.Shoulders, level: 21, title: 'Неравномерные отжимания в стойке на руках', video: '', iterations: 2, quantity: 10, mono: true},

    {id: 172, group: ExerciseType.Shoulders, level: 22, title: 'Половинные отжимания в стойке на одной руке', video: '', iterations: 1, quantity: 4, mono: true},
    {id: 173, group: ExerciseType.Shoulders, level: 23, title: 'Половинные отжимания в стойке на одной руке', video: '', iterations: 2, quantity: 6, mono: true},
    {id: 174, group: ExerciseType.Shoulders, level: 24, title: 'Половинные отжимания в стойке на одной руке', video: '', iterations: 2, quantity: 8, mono: true},

    {id: 175, group: ExerciseType.Shoulders, level: 25, title: 'Рычажные отжимания в стойке на руках', video: '', iterations: 1, quantity: 3, mono: true},
    {id: 176, group: ExerciseType.Shoulders, level: 26, title: 'Рычажные отжимания в стойке на руках', video: '', iterations: 2, quantity: 4, mono: true},
    {id: 177, group: ExerciseType.Shoulders, level: 27, title: 'Рычажные отжимания в стойке на руках', video: '', iterations: 2, quantity: 6, mono: true},

    {id: 178, group: ExerciseType.Shoulders, level: 28, title: 'Отжимания в стойке на одной руке', video: '', iterations: 1, quantity: 1, mono: true},
    {id: 179, group: ExerciseType.Shoulders, level: 29, title: 'Отжимания в стойке на одной руке', video: '', iterations: 2, quantity: 2, mono: true},
    {id: 180, group: ExerciseType.Shoulders, level: 30, title: 'Отжимания в стойке на одной руке', video: '', iterations: 2, quantity: 5, mono: true},
  ])

  constructor() { }

  getExercises(): Exercises {
    return this.exercises
  }
}

class Exercises {
  constructor(private exercises: Exercise[]) {}

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