import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from '../store';
import { ADD_TODO } from '../actions';
import { ITodo } from '../todo';

@Component({
  selector: 'app-todo-creator',
  templateUrl: './todo-creator.component.html',
  styleUrls: ['./todo-creator.component.css']
})
export class TodoCreatorComponent implements OnInit {

  @select() todos;

  model: ITodo = {
    id: 0,
    description: "",
    responsible: "",
    priority: "low",
    isCompleted: false
  }

  constructor(private ngRedux:NgRedux<IAppState>) { }

  ngOnInit() {
  }

  onSubmit() {
    this.ngRedux.dispatch({type:ADD_TODO, todo : this.model});

    this.model = {
      id: 0,
      description: "",
      responsible: "",
      priority: "low",
      isCompleted: false
    }
  }
}
