import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColombianPointsComponent } from './colombian-points.component';

describe('ColombianPointsComponent', () => {
  let component: ColombianPointsComponent;
  let fixture: ComponentFixture<ColombianPointsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColombianPointsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColombianPointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
