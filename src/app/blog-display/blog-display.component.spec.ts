import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogDisplayComponent } from './blog-display.component';

describe('BlogDisplayComponent', () => {
  let component: BlogDisplayComponent;
  let fixture: ComponentFixture<BlogDisplayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlogDisplayComponent]
    });
    fixture = TestBed.createComponent(BlogDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
