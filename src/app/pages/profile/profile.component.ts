import { Component } from '@angular/core';
import { Level, Options } from 'src/app/models/options';
import { BottomTabsService } from 'src/app/services/bottom-tabs.service';
import { ProgrammService } from 'src/app/services/programm.service';
import { UserExercisesService } from 'src/app/services/user-exercises.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  level: Level = Level.Beginner;

  constructor(bottomTabsService: BottomTabsService, private userExercisesService: UserExercisesService, private programmService: ProgrammService) {
    bottomTabsService.setActiveTab('profile');
    this.level = this.userExercisesService.getOptions().level;
  }

  save() {
    this.userExercisesService.setOptions(new Options(this.level));
    this.programmService.clearProgramm();
  }
}
