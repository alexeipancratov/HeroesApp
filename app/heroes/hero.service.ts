import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { IHero } from './hero';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class HeroService {
    private _heroesUrl = 'api/heroes/heroes.json';

    constructor(private _http: Http) { }

    getHeroes(): Observable<IHero[]> {
        return this._http.get(this._heroesUrl)
            .map(response => <IHero[]>response.json())
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        return Observable.throw(error.json().error || 'Server error');
    }
}