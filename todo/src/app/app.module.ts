import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AddtodoComponent } from './addtodo/addtodo.component';
import { TodoListComponent } from './todolist/todolist.component';


@NgModule({
  declarations: [
    AppComponent,
    AddtodoComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
