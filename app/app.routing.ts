import { Routes, RouterModule } from '@angular/router';

import { HeroListComponent } from './heroes/hero-list.component';
import { HeroDetailsComponent } from './heroes/hero-details.component';

const appRoutes: Routes = [
    { path: 'heroes', component: HeroListComponent },
    { path: 'heroes/:id', component: HeroDetailsComponent },
    { path: '', redirectTo: 'heroes', pathMatch: 'full' }
];

export const routing = RouterModule.forRoot(appRoutes);