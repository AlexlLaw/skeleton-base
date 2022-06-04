import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculoFinanceiroComponent } from './calculo-financeiro.component';

describe('CalculoFinanceiroComponent', () => {
  let component: CalculoFinanceiroComponent;
  let fixture: ComponentFixture<CalculoFinanceiroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculoFinanceiroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculoFinanceiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
