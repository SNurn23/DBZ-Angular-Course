import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({ // Componente padre
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {
  /*constructor(public dbzService: DbzService){} // En el constructor, se puede declarar variables como inyecciones de dependencias
  //nos habilita que todo el componente de mainpage pueda utilizar toda la información que se encuentre dentro del servicio*/


  //Se recomiendan usar servicios privados como buena practica de Typescript
  constructor(private dbzService: DbzService){}

  get characters(): Character[]{ return[...this.dbzService.characters]} // usar "Spread" y crear una copia de cada de los objetos

  onDeleteCharacter(id: string): void{
    this.dbzService.deleteCharacter(id);
  }

  onNewCharacter(character: Character): void{
    this.dbzService.addCharacter(character);
  }
}
