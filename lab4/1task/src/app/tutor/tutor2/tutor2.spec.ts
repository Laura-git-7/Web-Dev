import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tutor2 } from './tutor2';

describe('Tutor2', () => {
  let component: Tutor2;
  let fixture: ComponentFixture<Tutor2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tutor2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tutor2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
