import { Dialog } from '@angular/cdk/dialog';
import { LutasService } from './../services/lutas.service';
import { Component, OnInit } from '@angular/core';
import { Lutas } from '../model/lutas';
import { lutas_of } from '../model/lutas_of';
import { LutasOfService } from '../services/lutas-of.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-perfil-lutas',
  templateUrl: './perfil-lutas.component.html',
  styleUrls: ['./perfil-lutas.component.css']
})

export class PerfilLutasComponent implements OnInit {

  lutador?: Lutas;

  lutas?: lutas_of[];

  constructor(private LutasService: LutasService, private LutasOfService: LutasOfService,private route: ActivatedRoute){}


  ngOnInit(): void {

    let idLutador = this.route.snapshot.params["id"];
    this.LutasService.getLutadoresById(idLutador).subscribe(response => {
      this.lutador = response;
    })

    this.LutasOfService.getMusicas(idLutador).subscribe(response => {
      this.lutas = response;
    })
}

}
