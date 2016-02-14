import {Component, OnInit} from 'angular2/core';
import {Hero} from '../hero';
import {HeroService} from '../hero.service';
import {Router} from 'angular2/router';

@Component({
    selector: 'my-dashboard',
    templateUrl: 'app/dashboard/dashboard.component.html',
    providers: [HeroService]
})
export class DashboardComponent implements OnInit {
    heroes: Hero[];
    constructor(
        private _heroService: HeroService,
        private _router: Router) { }

    ngOnInit() {
        this.getHeroes();
    }

    getHeroes = () => {
        this._heroService.getHeroes().then(results => {
            this.heroes = results.slice(1, 5);
        });
    }

    gotoDetail = (hero: Hero) => {
        let link = ['HeroDetail', { id: hero.id }];

        this._router.navigate(link);
    }
}
