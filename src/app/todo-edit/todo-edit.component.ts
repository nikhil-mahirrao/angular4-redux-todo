import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from '../store';
import { ITodo } from '../todo';
import { SAVE_TODO } from '../actions';


@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css']
})
export class TodoEditComponent implements OnInit {

  //@select() todos;

  todoIndex = this.route.params["_value"].id;
  todos;
  subscription;
  model;
  
  
  
  
  constructor(
    private ngRedux:NgRedux<IAppState>, 
    private router: Router, 
    private route: ActivatedRoute
  ) { 

    this.subscription = ngRedux.select('todos')
    .subscribe(newCount => {
      this.todos = newCount
      this.model = newCount[this.todoIndex];
    });

  }

  ngOnInit() {
  }

  onSave() {
    this.todos[this.todoIndex] = this.model;
    this.ngRedux.dispatch({type:SAVE_TODO, todos : this.todos});

    this.router.navigateByUrl('/overview');
  }

}
