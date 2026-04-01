import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tutor17 } from './tutor17';

describe('Tutor17', () => {
  let component: Tutor17;
  let fixture: ComponentFixture<Tutor17>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tutor17]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tutor17);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
