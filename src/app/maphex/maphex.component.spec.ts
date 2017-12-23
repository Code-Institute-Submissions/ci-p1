import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaphexComponent } from './maphex.component';

describe('MaphexComponent', () => {
  let component: MaphexComponent;
  let fixture: ComponentFixture<MaphexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaphexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaphexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
