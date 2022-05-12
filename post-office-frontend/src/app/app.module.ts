import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LetterComponent } from './components/letter/letter.component';
import { NewLetterComponent } from './components/new-letter/new-letter.component';

@NgModule({
  declarations: [
    AppComponent,
    LetterComponent,
    NewLetterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
