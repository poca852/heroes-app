import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styles: [`
    mat-card{
      margin-top: 20px;
    }
  `
  ]
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() heroe!: Hero;

  constructor() { }

  ngOnInit(): void {
  }

}
