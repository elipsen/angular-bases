import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {

  // Creación de la instancia de un emisor de eventos para que los componentes se subscriban y reciban datos
  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    id: '',
    name: '',
    power: 0
  };

  emitCharacter(): void {

    // Para agregar un punto de ruptura, indicamos con debugger; donde se realiza la parada y en el navegador, a través
    // de la consola de depuración (F12) se parará y nos permitirá debugear. Una vez en esa ventana ya podemos marcar más
    // puntos de ruptura en el código
    // debugger;

    console.log(this.character);

    // Ejemplo de pequeña validación para evitar el envio
    if (this.character.name.length === 0) return;

    // Emitimos la información para los observadores
    this.onNewCharacter.emit(this.character);

    this.character = {id: '', name: '', power: 0};
  }
}
