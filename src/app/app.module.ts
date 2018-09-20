import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RequisaoPostComponent } from './componete/requisao-post/requisao-post.component';
import { Service } from './service/service';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    RequisaoPostComponent,
  ],
  imports: [
    HttpModule,
    BrowserModule,
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
  ],
  providers: [ReactiveFormsModule, Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
