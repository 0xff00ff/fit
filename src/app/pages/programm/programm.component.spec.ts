import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgrammComponent } from './programm.component';

describe('ProgrammComponent', () => {
  let component: ProgrammComponent;
  let fixture: ComponentFixture<ProgrammComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProgrammComponent]
    });
    fixture = TestBed.createComponent(ProgrammComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
