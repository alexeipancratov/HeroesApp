import { Component } from '@angular/core';

// Components
import { HeroListComponent } from './heroes/hero-list.component';

// Services
import { HeroService } from './heroes/hero.service';

@Component({
    selector: 'hm-app',
    templateUrl: 'app/app.component.html',
    providers: [ HeroService ]
})
export class AppComponent {
    
}