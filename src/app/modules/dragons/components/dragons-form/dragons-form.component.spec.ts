import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DragonsFormComponent } from './dragons-form.component';

describe('DragonsFormComponent', () => {
  let component: DragonsFormComponent;
  let fixture: ComponentFixture<DragonsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DragonsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DragonsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
