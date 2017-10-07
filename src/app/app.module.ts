import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { NgRedux, NgReduxModule } from '@angular-redux/store';
import { IAppState, rootReducer, INITIAL_STATE } from './store';

import { AppComponent } from './app.component';
import { TodoOverviewComponent } from './todo-overview/todo-overview.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoCreatorComponent } from './todo-creator/todo-creator.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoOverviewComponent,
    TodoListComponent,
    TodoCreatorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgReduxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(ngRedux:NgRedux<IAppState>){
    ngRedux.configureStore(rootReducer, INITIAL_STATE);
  }
}
