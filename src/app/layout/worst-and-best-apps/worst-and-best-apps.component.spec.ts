import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorstAndBestAppsComponent } from './worst-and-best-apps.component';

describe('WorstAndBestAppsComponent', () => {
  let component: WorstAndBestAppsComponent;
  let fixture: ComponentFixture<WorstAndBestAppsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorstAndBestAppsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorstAndBestAppsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
