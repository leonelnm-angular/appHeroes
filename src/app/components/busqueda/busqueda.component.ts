import { Component, OnInit } from '@angular/core';
import { Heroe, HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  heroes: Heroe[] = [];
  termino: string;

  constructor( private _heroesService: HeroesService,
               private _activedRoute: ActivatedRoute,
               private _router: Router ) { }

  ngOnInit() {
    this._activedRoute.params.subscribe( params => {
      this.termino = params['termino'];
      this.heroes = this._heroesService.buscarHeroes( params['termino'] );
    });
  }

  verHeroe( index: number ) {
    this._router.navigate( ['/heroe', index] );
  }
}
