import { ComponentFixture, TestBed } from '@angular/core/testing';


import { AlertsComponent } from './alerts.component';

describe('AlertsComponent', () => {

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(AlertsComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  let component: AlertsComponent;
  let fixture: ComponentFixture<AlertsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlertsComponent]
    })
    fixture = TestBed.createComponent(AlertsComponent);
    component = fixture.componentInstance;
    component.type = 'alert';

  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
