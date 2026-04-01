import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tutor11 } from './tutor11';

describe('Tutor11', () => {
  let component: Tutor11;
  let fixture: ComponentFixture<Tutor11>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tutor11]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tutor11);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
