import { Character } from './../../interfaces/character.interface';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  // Para recibir valores desde fuera. Sino recibimos nada, lo que tengamos asignado a la variable será lo que salga por defecto
  @Input()
  public characterList: Character[] = [];

  // Creación de la instancia de un emisor de eventos para que los componentes se subscriban y reciban datos
  @Output()
  public onDeleteCharacter: EventEmitter<string> = new EventEmitter();

  emitDeleteCharacter(id: string): void {
    this.onDeleteCharacter.emit(id);
  }
}
