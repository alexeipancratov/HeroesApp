import { Component, OnInit } from '@angular/core';
import { IHero } from './hero';
import { HeroService } from './hero.service';

@Component({
    templateUrl: 'app/heroes/hero-list.component.html',
    styleUrls: [ 'app/heroes/hero-list.component.css' ]
})
export class HeroListComponent implements OnInit {
    heroes: IHero[];
    errorMessage: string;

    constructor(private _heroService: HeroService) { }

    ngOnInit(): void {
        this._heroService.getHeroes()
            .subscribe(
                heroes => this.heroes = heroes, error => this.errorMessage = error);
    }
}