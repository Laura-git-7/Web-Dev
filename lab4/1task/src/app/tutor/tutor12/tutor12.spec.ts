import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tutor12 } from './tutor12';

describe('Tutor12', () => {
  let component: Tutor12;
  let fixture: ComponentFixture<Tutor12>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tutor12]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tutor12);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
