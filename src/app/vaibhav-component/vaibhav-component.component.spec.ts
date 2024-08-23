import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaibhavComponentComponent } from './vaibhav-component.component';

describe('VaibhavComponentComponent', () => {
  let component: VaibhavComponentComponent;
  let fixture: ComponentFixture<VaibhavComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VaibhavComponentComponent]
    });
    fixture = TestBed.createComponent(VaibhavComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
