import {HEROES} from './mock-heroes';
import {Injectable} from 'angular2/core';

@Injectable()
export class HeroService {
    getHeroes = () => {
        return Promise.resolve(HEROES);
    }

    getHero = (id: Number) => {
        return Promise.resolve(HEROES).then(
            heroes => {
                return heroes.filter(hero => {
                    return hero.id === id
                })[0];
            }
        );
    }
}
