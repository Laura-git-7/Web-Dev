import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tutor8 } from './tutor8';

describe('Tutor8', () => {
  let component: Tutor8;
  let fixture: ComponentFixture<Tutor8>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tutor8]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tutor8);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
