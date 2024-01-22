import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './components/todo/todo.component';
import { TodoFormAltaComponent } from './components/todo-form-alta/todo-form-alta.component';

const routes: Routes = [


  { path: '',
  children: [
    { path: '', component: TodoComponent },
    { path: 'crear-tarea', component: TodoFormAltaComponent },
    { path: 'modificar-tarea/:id', component:TodoFormAltaComponent }

  ]
  }

];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
