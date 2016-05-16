import { Component } from '@angular/core';


export class Hero {
    id: number;
    name: string;
}

@Component({
    selector: 'app-root',
    template: `
        <h1>{{title}}</h1>
        <h2>{{hero.name}} details!</h2>
        <details>
            <label>id: </label> {{hero.id}}
            <label>name: </label> {{hero.name}}
        </details>
        <form>
            <label>name: </label>
            <input [(ngModel)]="hero.name" value="{{hero.name}}" placeholder="name">
        </form>
    `
})

export class AppComponent {
    title = 'Tour of Heroes';
    hero = {
        id: 1,
        name: 'Windstorm'
    };
}
