import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MesesFilterComponent } from './meses-filter.component';

describe('MesesFilterComponent', () => {
  let component: MesesFilterComponent;
  let fixture: ComponentFixture<MesesFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MesesFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MesesFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
