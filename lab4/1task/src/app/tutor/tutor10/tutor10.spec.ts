import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tutor10 } from './tutor10';

describe('Tutor10', () => {
  let component: Tutor10;
  let fixture: ComponentFixture<Tutor10>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tutor10]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tutor10);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
