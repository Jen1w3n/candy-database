import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandyCreateComponent } from './candy-create.component';

describe('CandyCreateComponent', () => {
  let component: CandyCreateComponent;
  let fixture: ComponentFixture<CandyCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CandyCreateComponent]
    });
    fixture = TestBed.createComponent(CandyCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
