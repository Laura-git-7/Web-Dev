import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tutor18 } from './tutor18';

describe('Tutor18', () => {
  let component: Tutor18;
  let fixture: ComponentFixture<Tutor18>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tutor18]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tutor18);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
