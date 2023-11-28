import { Component } from '@angular/core';
import { LutasService } from '../services/lutas.service';
import { Lutas } from '../model/lutas';

@Component({
  selector: 'app-create-luta',
  templateUrl: './create-luta.component.html',
  styleUrls: ['./create-luta.component.css']
})
export class CreateLutaComponent {
  lutador: Lutas = {
    nome: '',
    cpf: ''
  };

  constructor(private lutasService: LutasService) {}

  criarNovoLutador() {
    const novoLutador: Lutas = {
      nome: this.lutador.nome,
      cpf: this.lutador.cpf,
    };

    this.lutasService.createLutador(novoLutador).subscribe(response => {
      this.lutador = response;

      // Assuming you want to reset the form after successful creation
      this.lutador = {
        nome: '',
        cpf: '',
      };
    });
  }
}


