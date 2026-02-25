import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tutor1 } from './tutor1';

describe('Tutor1', () => {
  let component: Tutor1;
  let fixture: ComponentFixture<Tutor1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tutor1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tutor1);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
