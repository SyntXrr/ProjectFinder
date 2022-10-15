import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingProjectsComponent } from './trending-projects.component';

describe('TrendingProjectsComponent', () => {
  let component: TrendingProjectsComponent;
  let fixture: ComponentFixture<TrendingProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrendingProjectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendingProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
