import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tutor13 } from './tutor13';

describe('Tutor13', () => {
  let component: Tutor13;
  let fixture: ComponentFixture<Tutor13>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tutor13]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tutor13);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
