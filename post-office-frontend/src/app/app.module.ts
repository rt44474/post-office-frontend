import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LetterComponent } from './components/letter/letter.component';
import { NewLetterComponent } from './components/new-letter/new-letter.component';
import { LetterService } from './services/letter.service';
import {HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LettersBeforeComponent } from './components/letters-before/letters-before.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    LetterComponent,
    NewLetterComponent,
    LettersBeforeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgbModule,
    FontAwesomeModule,
    FormsModule,
  ],
  providers: [LetterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
