import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TestComponent } from './test.component';
import { HeaderComponent } from './header/header.component';
import { SyntaxeComponent } from './syntaxe/syntaxe.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { FormsModule } from '@angular/forms';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { AjoutProduitComponent } from './ajout-produit/ajout-produit.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    HeaderComponent,
    SyntaxeComponent,
    LifecycleComponent,
    ContactFormComponent,
    CatalogueComponent,
    AjoutProduitComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
