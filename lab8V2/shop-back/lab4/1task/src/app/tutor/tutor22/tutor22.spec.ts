import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tutor22 } from './tutor22';

describe('Tutor22', () => {
  let component: Tutor22;
  let fixture: ComponentFixture<Tutor22>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tutor22]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tutor22);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
