import { LutasService } from './../../services/lutas.service';
import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Lutas } from 'src/app/model/lutas';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lutas',
  templateUrl: './lutas.component.html',
  styleUrls: ['./lutas.component.css']
})

export class AllLutasComponent implements OnInit {

  lutadores : Lutas [] = [];


constructor(private lutasService : LutasService, private router: Router){}

ngOnInit(): void {
  this.lutasService.getLutadores().subscribe(response => {
    this.lutadores = response;})

}

redirectToPerfilutas(id : any) {
  this.router.navigate(["perfil-lutas", id])
}

}

