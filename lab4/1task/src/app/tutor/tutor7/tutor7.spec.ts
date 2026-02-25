import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tutor7 } from './tutor7';

describe('Tutor7', () => {
  let component: Tutor7;
  let fixture: ComponentFixture<Tutor7>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tutor7]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tutor7);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
