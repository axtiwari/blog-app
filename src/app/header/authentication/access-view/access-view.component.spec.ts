import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccesViewComponent } from './acces-view.component';

describe('AccesViewComponent', () => {
  let component: AccesViewComponent;
  let fixture: ComponentFixture<AccesViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccesViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
