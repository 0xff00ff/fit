import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BottomTabsService {

  activeTab: string = '';

  constructor() { }

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }

  getTabClass(tab: string) {
    return this.activeTab === tab ? 'active' : '';
  }
}
