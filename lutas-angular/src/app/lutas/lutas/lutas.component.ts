import { LutasService } from './../../services/lutas.service';
import { Component } from '@angular/core';
import { Lutas } from 'src/app/model/lutas';

@Component({
  selector: 'app-lutas',
  templateUrl: './lutas.component.html',
  styleUrls: ['./lutas.component.css']
})
export class AllLutasComponent {

  lutadores : Lutas [] = [];


constructor(private lutasService : LutasService){

}
ngOnInit(): void {
  this.lutasService.getLutadores().subscribe(response => {
    this.lutadores = response;
  });
}

}

