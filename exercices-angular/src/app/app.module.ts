import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ExerciceA1Component } from './exercices/1-template/exercice-a1/exercice-a1.component';
import { ExerciceA2Component } from './exercices/1-template/exercice-a2/exercice-a2.component';
import { ExerciceA3Component } from './exercices/1-template/exercice-a3/exercice-a3.component';
import { ExerciceA4Component } from './exercices/2-proprietes-evenements/exercice-a4/exercice-a4.component';
import { ExerciceA5Component } from './exercices/1-template/exercice-a5/exercice-a5.component';
import { ExerciceA6Component } from './exercices/1-template/exercice-a6/exercice-a6.component';
import { ExerciceA7Component } from './exercices/1-template/exercice-a7/exercice-a7.component';
import { ExerciceB1Component } from './exercices/2-proprietes-evenements/exercice-b1/exercice-b1.component';

@NgModule({
  declarations: [
    AppComponent,
    ExerciceA1Component,
    ExerciceA2Component,
    ExerciceA3Component,
    ExerciceA4Component,
    ExerciceA5Component,
    ExerciceA6Component,
    ExerciceA7Component,
    ExerciceB1Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
