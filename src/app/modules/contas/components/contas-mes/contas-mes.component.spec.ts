import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContasMesComponent } from './contas-mes.component';

describe('ContasMesComponent', () => {
  let component: ContasMesComponent;
  let fixture: ComponentFixture<ContasMesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContasMesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContasMesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
