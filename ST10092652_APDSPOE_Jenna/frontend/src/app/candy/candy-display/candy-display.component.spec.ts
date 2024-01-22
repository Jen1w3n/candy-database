import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandyDisplayComponent } from './candy-display.component';

describe('CandyDisplayComponent', () => {
  let component: CandyDisplayComponent;
  let fixture: ComponentFixture<CandyDisplayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CandyDisplayComponent]
    });
    fixture = TestBed.createComponent(CandyDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
