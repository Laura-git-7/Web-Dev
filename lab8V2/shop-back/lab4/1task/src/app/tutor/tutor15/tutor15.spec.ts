import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tutor15 } from './tutor15';

describe('Tutor15', () => {
  let component: Tutor15;
  let fixture: ComponentFixture<Tutor15>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tutor15]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tutor15);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
