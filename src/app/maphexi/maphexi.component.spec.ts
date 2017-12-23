import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaphexiComponent } from './maphexi.component';

describe('MaphexiComponent', () => {
  let component: MaphexiComponent;
  let fixture: ComponentFixture<MaphexiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaphexiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaphexiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
