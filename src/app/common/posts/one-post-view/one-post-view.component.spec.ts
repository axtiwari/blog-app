import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnePostViewComponent } from './one-post-view.component';

describe('OnePostViewComponent', () => {
  let component: OnePostViewComponent;
  let fixture: ComponentFixture<OnePostViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnePostViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnePostViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
