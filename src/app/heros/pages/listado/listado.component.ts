import { Component, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/hero.interface';
import { HerosService } from '../../services/heros.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles: []
})
export class ListadoComponent implements OnInit {

  heros: Hero[] = [];

  constructor(private herosService: HerosService) { }

  ngOnInit(): void {
    this.herosService.getHeros()
      .subscribe(heros => {
        this.heros = heros;
      })

  }

}
