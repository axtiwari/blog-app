import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePostViewComponent } from './create-post-view.component';

describe('CreatePostViewComponent', () => {
  let component: CreatePostViewComponent;
  let fixture: ComponentFixture<CreatePostViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatePostViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePostViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
