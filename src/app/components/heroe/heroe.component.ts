import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})


export class HeroeComponent {

  heroe: any = {};

  constructor( private activatedRoute: ActivatedRoute,
               private _heroeService: HeroesService,
               private location: Location ) {

    this.activatedRoute.params.subscribe( params => {
      this.heroe = this._heroeService.getHeroesId( params['id'] );
    });

  }


  regresar() {
    this.location.back();
  }


}
