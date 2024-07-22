import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({ //Componente hijo
    selector: 'list-dbz',
    templateUrl: './list-dbz.component.html',
    styleUrl: './list-dbz.component.css',
})

export class ListDbzComponent {
  @Input() //Comunicación entre componentes: Comunicación entre padre e hijo
  public characterList: Character[] = [
    {
      name: 'Trunk',
      power: 10
    }
  ];

/*Utilizando sin ID, solo se usaba para el tema del index
  @Output()
  public onDelete: EventEmitter<number> = new EventEmitter(); // utilizado para emitir valores de cualquier tipo

   onDeleteCharacter(index: number): void{
    //TODO: EMITI EL INDEX DEL PERSONAJE
    console.log(`Borrando personaje ${index}`); //Es recomendarlecon trabajar ids propios de los objetos y no los index de la lista
    this.onDelete.emit(index);
  }
*/

@Output()
public onDelete: EventEmitter<string> = new EventEmitter();
  onDeleteCharacter(id?: string): void{
    //TODO: EMITI EL ID DEL PERSONAJE
    if(!id) return;
   // console.log(`Borrando personaje ${id}`); //Es recomendarle con trabajar ids propios de los objetos y no los index de la lista
    this.onDelete.emit(id);
  }
}

/*Dos opciones para solucionar el error:
 - Hacerlo Obligatorio: utilizando ! en el html
  <button (click)="onDeleteCharacter(character.id!)" class="btn btn-danger">X</button> // Donde el "!" va indicar que siempre lo va a recibir
  Otra opción:  <button (click)="onDeleteCharacter(character.id || '')" class="btn btn-danger">X</button>

 - Hacerlo Opcional: utilizando ? en el id
    onDeleteCharacter(id?: string): void{
      if(!id) return;
      this.onDelete.emit(id);
    }
*/
