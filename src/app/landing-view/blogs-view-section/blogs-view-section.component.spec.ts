import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogsViewSectionComponent } from './blogs-view-section.component';

describe('BlogsViewSectionComponent', () => {
  let component: BlogsViewSectionComponent;
  let fixture: ComponentFixture<BlogsViewSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogsViewSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogsViewSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
