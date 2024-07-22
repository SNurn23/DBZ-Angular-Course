import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({ //Componente hijo
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {

 //Output -> se utiliza para conectar el componente hijo al componente padre y emitir valores
  @Output()
  // EventEmitter para emitir eventos a los padres. Se declara como una propiedad pública y se instancia con new EventEmitter().
 public onNewCharacter: EventEmitter<Character> = new EventEmitter(); // utilizado para emitir valores de cualquier tipo


  public character: Character = {
    name: 'vv',
    power: 0
  };

  emiteCharacter():void{

    //breakpoints --> puntos para ver el comportamiento de mi navegador web.  Esto te permite inspeccionar el estado del programa en puntos específicos
    //debugger; //Cuando js llega a este punto, se realiza una interrupción en tu código para que la ejecución se detenga.

    if(this.character.name.length === 0) return; // Validar que el usuario no pueda ingresar cadenas vacias
    this.onNewCharacter.emit(this.character); // Emitir el evento al padre con el personaje nuevo
    this.character = { // Resetear el formulario
      name: '',
      power: 0
    };

  }


}
