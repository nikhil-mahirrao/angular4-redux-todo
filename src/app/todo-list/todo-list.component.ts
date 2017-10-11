import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from '../store';
import { ITodo } from '../todo';
import { REMOVE_TODO, TOGGLE_TODO } from '../actions';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  @select() todos;

  constructor(private ngRedux:NgRedux<IAppState>) { }

  ngOnInit() {
    //console.log(this.todos)
  }

  toggleTodo(todo) {
    this.ngRedux.dispatch({type:TOGGLE_TODO, id:todo.id});
  }

  removeTodo(todo){
    this.ngRedux.dispatch({type: REMOVE_TODO, id: todo.id});
  }

  editTodo(){
    //store.dispatch(show(['/path'], { query: 'string' }));
    //routerLink="['/edit', t.id, 'id']"
  }

}
