import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HabitItemComponent } from './habit-item/habit-item.component';
import { HabitListComponent } from './habit-list/habit-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HabitItemComponent,
    HabitListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
