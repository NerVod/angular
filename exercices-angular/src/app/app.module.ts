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
import { ExerciceB2Component } from './exercices/2-proprietes-evenements/exercice-b2/exercice-b2.component';
import { ExerciceB3Component } from './exercices/2-proprietes-evenements/exercice-b3/exercice-b3.component';
import { ExerciceB4Component } from './exercices/2-proprietes-evenements/exercice-b4/exercice-b4.component';
import { ExerciceB5Component } from './exercices/2-proprietes-evenements/exercice-b5/exercice-b5.component';
import { ExerciceB6Component } from './exercices/1-expressions/exercice-b6/exercice-b6.component';
import { FormsModule } from '@angular/forms';

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
    ExerciceB1Component,
    ExerciceB2Component,
    ExerciceB3Component,
    ExerciceB4Component,
    ExerciceB5Component,
    ExerciceB6Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
