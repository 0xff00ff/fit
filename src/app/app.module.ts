import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatIconModule} from '@angular/material/icon';
import { ProgrammComponent } from './pages/programm/programm.component';
import { StatisticsComponent } from './pages/statistics/statistics.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { FormsModule } from '@angular/forms';
import { ServiceWorkerModule } from '@angular/service-worker';
import { CurrentDayComponent } from './pages/current-day/current-day.component';

@NgModule({
  declarations: [
    AppComponent,
    ProgrammComponent,
    StatisticsComponent,
    ProfileComponent,
    CurrentDayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
