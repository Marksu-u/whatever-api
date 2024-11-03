import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenderPredictorComponent } from './gender-predictor.component';

describe('GenderPredictorComponent', () => {
  let component: GenderPredictorComponent;
  let fixture: ComponentFixture<GenderPredictorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenderPredictorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenderPredictorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
