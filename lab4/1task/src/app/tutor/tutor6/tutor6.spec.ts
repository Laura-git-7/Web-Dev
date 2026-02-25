import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tutor6 } from './tutor6';

describe('Tutor6', () => {
  let component: Tutor6;
  let fixture: ComponentFixture<Tutor6>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tutor6]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tutor6);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
