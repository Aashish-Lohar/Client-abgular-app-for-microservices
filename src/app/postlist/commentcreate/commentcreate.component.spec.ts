import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentcreateComponent } from './commentcreate.component';

describe('CommentcreateComponent', () => {
  let component: CommentcreateComponent;
  let fixture: ComponentFixture<CommentcreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentcreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommentcreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
