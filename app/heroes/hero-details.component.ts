import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HeroService } from './hero.service';
import { IHero } from './hero';

@Component({
    templateUrl: 'app/hero-details.html',
    styleUrls: ['app/hero-details.components.css']
})
export class HeroDetailsComponent implements OnInit {

    hero: IHero;
    errorMessage: string;

    constructor(
        private _heroService: HeroService,
        private _route: ActivatedRoute) {}

    ngOnInit() {
        let heroId = +this._route.params['id'];

        this._heroService.getHero(heroId)
            .subscribe(
                hero => this.hero = hero,
                error => this.errorMessage = error);
    }
}