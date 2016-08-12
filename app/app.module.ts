import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { routing } from './app.routing';

import { AppComponent }  from './app.component';
import { HeroListComponent } from './heroes/hero-list.component';

@NgModule({
  imports:      [ BrowserModule, routing ],
  declarations: [ AppComponent, HeroListComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
