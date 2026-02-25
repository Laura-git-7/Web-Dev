import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tutor3 } from './tutor3';

describe('Tutor3', () => {
  let component: Tutor3;
  let fixture: ComponentFixture<Tutor3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tutor3]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tutor3);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
