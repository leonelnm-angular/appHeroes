import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor( private _heroesService: HeroesService,
               private _router: Router) { }

  ngOnInit() {
  }

  buscarHeroe( termino: string ) {
    console.log(termino);
    this._router.navigate(['/busqueda', termino]);
  }

}
