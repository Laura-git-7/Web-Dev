import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tutor5 } from './tutor5';

describe('Tutor5', () => {
  let component: Tutor5;
  let fixture: ComponentFixture<Tutor5>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tutor5]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tutor5);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
