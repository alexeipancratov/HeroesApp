import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { HTTP_PROVIDERS } from '@angular/http';

// Components
import { HeroListComponent } from './heroes/hero-list.component';

// Services
import { HeroService } from './heroes/hero.service';

@Component({
    selector: 'hm-app',
    templateUrl: 'app/app.component.html',
    providers: [ HeroService, HTTP_PROVIDERS ]
})
export class AppComponent {
    
}