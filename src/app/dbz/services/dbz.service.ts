import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid} from 'uuid'; //version 4 para generar los IDs

@Injectable({ //Decorador que le va a decir a angular que esta clase es un servicio
  providedIn: 'root'//Propiedad nos va a indicar que nuestro servicio va a ser un singleton en todo nuestra aplicación, no importa en cuantos lugares se utilice siempre se va tener esa instancia
})

//Buena practica de Typescript -> Usar servicios privados
export class DbzService { //TODO: Utilizando servicio, hacemos que el código sea más reutilizable
    public characters: Character[] = [{
      id: uuid(),
      name: 'Goku',
      power: 9001
    },{
      id: uuid(),
      name: 'Vegeta',
      power: 99999
    },{
      id: uuid(),
      name: 'Krillin',
      power: 9000000
    },{
      id: uuid(),
      name: 'Frieza',
      power: 900000000
    }
  ]; // siempre definir el tipo de dato, sino se sabe entonces crear una interfaz

 /* onNewCharacter (character: Character):void{
    this.characters.push(character);// agregar un nuevo elemento al final del arreglo
    this.characters.unshift(character);// agregar un nuevo elemento al inicio del arreglo
  }

  onDeleteCharacter (index: number):void{  //No deberiamos eliminar elementos por la posición index, en caso se debería eliminar por el ID unico que tiene el objeto
    this.characters.splice(index, 1); // se pone un 1 para que solo borre un elemento
  }
  */
  //Para utilizar ID unicos para los objetos, se va a utilizar un paquete externo (UUID), el cual nos va ayudar a generar identificadores unicos con cierto formato

  addCharacter(character: Character):void {
    const newCharacter : Character = {
      id: uuid(),
     ...character //Operador "Spread" que nos ayuda a declarar el resto de los campos sin ponerlos todos
    }

    this.characters.push(newCharacter);
  }

  deleteCharacter(id:string): void {
    this.characters = this.characters.filter(char => char.id!== id); // filter crea un nuevo arreglo con todos los elementos que cumplan con la función devolver true
    // En este caso, se filtran los personajes que no tengan el id que pasamos como parámetro
  }
  constructor() { }

}

