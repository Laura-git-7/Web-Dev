import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tutor23 } from './tutor23';

describe('Tutor23', () => {
  let component: Tutor23;
  let fixture: ComponentFixture<Tutor23>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tutor23]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tutor23);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
