import { Routes, RouterModule } from '@angular/router';

import { HeroListComponent } from './heroes/hero-list.component';

const appRoutes: Routes = [
    { path: 'heroes', component: HeroListComponent },
    { path: 'heroes/:id', component:  }
];

export const routing = RouterModule.forRoot(appRoutes);