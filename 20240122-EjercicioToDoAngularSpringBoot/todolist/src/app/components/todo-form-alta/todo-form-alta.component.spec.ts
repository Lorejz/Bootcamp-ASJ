import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoFormAltaComponent } from './todo-form-alta.component';

describe('TodoFormAltaComponent', () => {
  let component: TodoFormAltaComponent;
  let fixture: ComponentFixture<TodoFormAltaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodoFormAltaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TodoFormAltaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
