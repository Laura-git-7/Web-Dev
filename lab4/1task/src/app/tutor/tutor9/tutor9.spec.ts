import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tutor9 } from './tutor9';

describe('Tutor9', () => {
  let component: Tutor9;
  let fixture: ComponentFixture<Tutor9>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tutor9]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tutor9);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
