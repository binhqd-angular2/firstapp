import {Component, OnInit} from 'angular2/core';
import {Hero} from './hero';
import {HeroService} from './hero.service';
import {HeroDetailComponent} from './hero-detail.component';
import {Router} from 'angular2/router';

@Component({
    selector: 'my-heroes',
    templateUrl: 'app/my-heroes.component.html',
    providers: [HeroService],
    directives: [HeroDetailComponent]
})

export class HeroesComponent implements OnInit {
    heroes: Hero[];
    public selectedHero: Hero;

    constructor(
        private _heroService: HeroService,
        private _router: Router
    ) { };
    onSelect = (hero: Hero) => { this.selectedHero = hero; }
    getHeroes = () => {
        this._heroService.getHeroes().then(results => {
            console.log(results);
            this.heroes = results;
        });
    }

    ngOnInit() {
        console.log('test');
        this.getHeroes();
    }

    gotoDetail = () => {
        let links = ['HeroDetail', { id: this.selectedHero.id }];

        this._router.navigate(links);
    }
}
