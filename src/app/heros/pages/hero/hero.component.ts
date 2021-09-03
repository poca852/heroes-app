import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Hero } from '../../interfaces/hero.interface';
import { HerosService } from '../../services/heros.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styles: [`
  
    img{
      width: 100%;
    }
  `
  ]
})
export class HeroComponent implements OnInit {

  heroe!: Hero;

  constructor(
      private activateRoute: ActivatedRoute,
      private heroeService: HerosService,
      private router: Router) { }

  ngOnInit(): void {

    this.activateRoute.params
      .pipe(
        switchMap( ({id}) => this.heroeService.getHeroePorId(id))
      )
      .subscribe( heroe => this.heroe = heroe )
  }

  regresar(){
    this.router.navigate(['/heros/listado'])
  }

}
