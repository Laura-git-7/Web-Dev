import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tutor4 } from './tutor4';

describe('Tutor4', () => {
  let component: Tutor4;
  let fixture: ComponentFixture<Tutor4>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tutor4]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tutor4);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
