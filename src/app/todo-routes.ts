import { TodoOverviewComponent } from './todo-overview/todo-overview.component';
import { TodoEditComponent } from './todo-edit/todo-edit.component';

export const todoRoutes = [
    { path: '', redirectTo: '/overview', pathMatch: 'full' },
    { path: 'overview', component: TodoOverviewComponent },
    { path: 'edit/:id', component: TodoEditComponent }
];