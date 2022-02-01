import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ExerciceA1Component } from './exercices/1-template/exercice-a1/exercice-a1.component';
import { ExerciceA2Component } from './exercices/1-template/exercice-a2/exercice-a2.component';
import { ExerciceA3Component } from './exercices/1-template/exercice-a3/exercice-a3.component';

@NgModule({
  declarations: [
    AppComponent,
    ExerciceA1Component,
    ExerciceA2Component,
    ExerciceA3Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
