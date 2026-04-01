import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tutor19 } from './tutor19';

describe('Tutor19', () => {
  let component: Tutor19;
  let fixture: ComponentFixture<Tutor19>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tutor19]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tutor19);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
