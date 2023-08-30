import { Component } from '@angular/core';
import { BottomTabsService } from './services/bottom-tabs.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fit';

  constructor(public bottomTabsService: BottomTabsService) {
  }
}
