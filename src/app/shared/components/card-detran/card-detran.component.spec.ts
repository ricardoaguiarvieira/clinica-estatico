import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDetranComponent } from './card-detran.component';

xdescribe('CardDetranComponent', () => {
  let component: CardDetranComponent;
  let fixture: ComponentFixture<CardDetranComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardDetranComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardDetranComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
