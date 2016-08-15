import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { HeroService } from './hero.service';
import { IHero } from './hero';

@Component({
    templateUrl: 'app/heroes/hero-details.component.html'
})
export class HeroDetailsComponent implements OnInit {

    hero: IHero;
    errorMessage: string;

    constructor(
        private _heroService: HeroService,
        private _route: ActivatedRoute) {}

    ngOnInit() {
        this._route.params.forEach((params: Params) => {
            let id = +params['id'];
            
            this._heroService.getHero(id)
            .subscribe(
                hero => this.hero = hero,
                error => this.errorMessage = error);
        });
    }
}