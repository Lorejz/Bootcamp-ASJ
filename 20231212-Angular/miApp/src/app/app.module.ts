import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { MainSidebarComponent } from './components/main-sidebar/main-sidebar.component';
import { MainSectionComponent } from './components/main-section/main-section.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    MainSidebarComponent,
    MainSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
