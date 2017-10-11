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

  @select() todos;
  
  id = this.route.params;

  model: ITodo = {
    id: 0,
    description: "",
    responsible: "",
    priority: "low",
    isCompleted: false
  }  

  constructor(
    private ngRedux:NgRedux<IAppState>, 
    private router: Router, 
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
  }

  onSave() {
    console.log(this.todos);
    this.ngRedux.dispatch({type:SAVE_TODO, todo : this.model, id:this.id});
  }

}
