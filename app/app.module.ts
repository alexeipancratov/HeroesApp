// Defines the application's root module. In it we identify the external modules we'll use in our application 
// and declare the components that belong to this module.

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { routing } from './app.routing';

// Components
import { AppComponent }  from './app.component';
import { HeroListComponent } from './heroes/hero-list.component';
import { HeroDetailsComponent } from './heroes/hero-details.component';

// Services
import { HeroService } from './heroes/hero.service';

@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule, routing ],
  declarations: [ AppComponent, HeroListComponent, HeroDetailsComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ HeroService ]
})
export class AppModule { }
