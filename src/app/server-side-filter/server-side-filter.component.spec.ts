import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ServerSideFilterComponent } from './server-side-filter.component';

describe('ServerSideFilterComponent', () => {
  let component: ServerSideFilterComponent;
  let fixture: ComponentFixture<ServerSideFilterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServerSideFilterComponent]
    });
    fixture = TestBed.createComponent(ServerSideFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
