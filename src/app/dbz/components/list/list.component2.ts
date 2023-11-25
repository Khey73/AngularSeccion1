import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Character } from "../../interfaces/character.interface";

@Component({
  selector: "app-dbz-list",
  templateUrl: "./list.component2.html",
 styleUrls: ["./list.component2.css"]
})
export class ListComponent2{

  @Input()
  public characterList: Character[] = [
    {
      name: "TRUNKS SUPER",
      power: 130000
    }
  ]
  //TAREA: emitir el indice de este evnto
  @Output()
  onDelete: EventEmitter<string> = new EventEmitter();

  //tarea
  onDeleteCharacter(character: Character):void{
    // TODO enitir el id del personaje
    this.onDelete.emit(character.id)
  }
}
