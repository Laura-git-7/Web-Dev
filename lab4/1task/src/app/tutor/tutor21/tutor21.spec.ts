import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tutor21 } from './tutor21';

describe('Tutor21', () => {
  let component: Tutor21;
  let fixture: ComponentFixture<Tutor21>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tutor21]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tutor21);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
