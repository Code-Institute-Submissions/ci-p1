import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapgeoComponent } from './mapgeo.component';

describe('MapgeoComponent', () => {
  let component: MapgeoComponent;
  let fixture: ComponentFixture<MapgeoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapgeoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapgeoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
