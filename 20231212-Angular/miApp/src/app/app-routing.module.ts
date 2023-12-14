import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainSectionSimpsonsComponent } from './components/main-section-simpsons/main-section-simpsons.component';
import { MainSectionComponent } from './components/main-section/main-section.component';

const routes: Routes = [
   { path: "simpsons", component : MainSectionSimpsonsComponent },
   { path: "todo", component : MainSectionComponent  }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
