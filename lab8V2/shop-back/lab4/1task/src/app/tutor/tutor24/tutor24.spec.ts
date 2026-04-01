import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tutor24 } from './tutor24';

describe('Tutor24', () => {
  let component: Tutor24;
  let fixture: ComponentFixture<Tutor24>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tutor24]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tutor24);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
