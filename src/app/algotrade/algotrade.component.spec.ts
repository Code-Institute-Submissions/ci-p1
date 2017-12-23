import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlgotradeComponent } from './algotrade.component';

describe('AlgotradeComponent', () => {
  let component: AlgotradeComponent;
  let fixture: ComponentFixture<AlgotradeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlgotradeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlgotradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
