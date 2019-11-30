import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchDaysComponent } from './match-days.component';

describe('MatchDaysComponent', () => {
  let component: MatchDaysComponent;
  let fixture: ComponentFixture<MatchDaysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchDaysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchDaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
