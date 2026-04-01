import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tutor20 } from './tutor20';

describe('Tutor20', () => {
  let component: Tutor20;
  let fixture: ComponentFixture<Tutor20>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tutor20]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tutor20);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
