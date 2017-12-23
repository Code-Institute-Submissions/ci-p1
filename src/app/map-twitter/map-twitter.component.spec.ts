import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapTwitterComponent } from './map-twitter.component';

describe('MapTwitterComponent', () => {
  let component: MapTwitterComponent;
  let fixture: ComponentFixture<MapTwitterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapTwitterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapTwitterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
