import { Component } from '@angular/core';

import { HeroListComponent } from './heroes/hero-list.component';

@Component({
    selector: 'hm-app',
    templateUrl: 'app/app.component.html',
    directives: [HeroListComponent]
})
export class AppComponent {
    
}