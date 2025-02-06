import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { EnviaFormularioService } from '../../services/envia-formulario.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  //Service
  private enviaFormularioService = inject(EnviaFormularioService);

  meuBooleano = false;
  name = "Rodrigo";
  idButton = "fdkdjd";
  deveMostrarTitulo = false;
  listItems = ["um", "dois", "tres"];

  @Input("name") teste!: string;
  @Output() emitindoValorName = new EventEmitter<string>();
  
  atualizaBooleani(valor: boolean) {
    this.meuBooleano = valor;
  }

  submit(){
    this.emitindoValorName.emit(this.name);
    // this.enviaFormularioService.enviaInformacaoParaBackend("enviando informacao");
  }
}
