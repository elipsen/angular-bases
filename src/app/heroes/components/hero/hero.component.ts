import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name: string = 'ironman';
  public age:  number = 45;
  public changed: boolean = false;

  // Palabra reservada get, metodo reservado para los get
  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  changeHero(): void {
    this.name = 'spiderman';
    this.changed = true;
  }

  changeAge(): void {
    this.age = 25;
  }

  resetHero(): void {
    this.name = 'ironman';
    this.age = 45;
  }
}
