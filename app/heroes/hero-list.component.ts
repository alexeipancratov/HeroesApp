import { Component, OnInit } from '@angular/core';
import { IHero } from './hero';
import { HeroService } from './hero.service';

@Component({
    selector: 'hm-list',
    templateUrl: 'app/heroes/hero-list.component.html',
    styleUrls: [ 'app/heroes/hero-list.component.css' ]
})
export class HeroListComponent implements OnInit {
    heroes: IHero[];
    errorMessage: string;
    selectedHero: IHero;

    constructor(private _heroService: HeroService) { }

    ngOnInit(): void {
        this._heroService.getHeroes()
            .subscribe(
                heroes => this.heroes = heroes, error => this.errorMessage = error);
    }

    onHeroSelect(hero: IHero): void {
        this.selectedHero = hero;
    }
}