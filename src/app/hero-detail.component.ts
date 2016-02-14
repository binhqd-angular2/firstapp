import {Component, OnInit} from 'angular2/core';
import {Hero} from './hero';
import {HeroService} from './hero.service';
import {RouteParams} from 'angular2/router';

@Component({
    selector: 'my-hero-detail',
    templateUrl: 'app/hero-detail.component.html',
    inputs: ['hero'],
    providers: [HeroService]
})

export class HeroDetailComponent implements OnInit {
    hero: Hero;
    constructor(
        private _heroService: HeroService,
        private _routerParams: RouteParams) { };

    ngOnInit() {
        let id = +this._routerParams.get('id');
        this._heroService.getHero(id).then(hero => {
            this.hero = hero;
        });
    }
}
