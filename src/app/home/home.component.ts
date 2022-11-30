import { Component } from '@angular/core';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(
    private heroService: HeroService,

  ) {}

  ngOnInit(): void {
    this.heroService.sayHello();
    console.log("Hello Angular")
  }

  ngOnDestory(): void {

  }

  ngOnChanges(): void {

  }
}
