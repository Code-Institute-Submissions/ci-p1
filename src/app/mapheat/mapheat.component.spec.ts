import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapheatComponent } from './mapheat.component';

describe('MapheatComponent', () => {
  let component: MapheatComponent;
  let fixture: ComponentFixture<MapheatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapheatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapheatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
