import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IexdataComponent } from './iexdata.component';

describe('IexdataComponent', () => {
  let component: IexdataComponent;
  let fixture: ComponentFixture<IexdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IexdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IexdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
