import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tutor14 } from './tutor14';

describe('Tutor14', () => {
  let component: Tutor14;
  let fixture: ComponentFixture<Tutor14>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tutor14]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tutor14);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
