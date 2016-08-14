import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

// Components
import { AppComponent }  from './app.component';
import { HeroListComponent } from './heroes/hero-list.component';

// Services
import { HeroService } from './heroes/hero.service';

@NgModule({
  imports:      [ BrowserModule, HttpModule ],
  declarations: [ AppComponent, HeroListComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ HeroService ]
})
export class AppModule { }
