import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoNavbarComponent } from './todo-navbar.component';

describe('TodoNavbarComponent', () => {
  let component: TodoNavbarComponent;
  let fixture: ComponentFixture<TodoNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
