import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tutor16 } from './tutor16';

describe('Tutor16', () => {
  let component: Tutor16;
  let fixture: ComponentFixture<Tutor16>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tutor16]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tutor16);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
