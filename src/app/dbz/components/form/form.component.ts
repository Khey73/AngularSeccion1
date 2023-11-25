import { Component, EventEmitter, Output } from "@angular/core";
import { Character } from "../../interfaces/character.interface";



@Component({
  templateUrl: "./form.component.html",
  styleUrl: "./form.component.css",
  selector: "dbz-add-character"
})
export class FormComponent{

  //propeidad de tipo EventEmiter que solo aceopta inteerfazes character
  //estas emitiendolo al padre
  @Output()
  onNewCharacter: EventEmitter<Character> = new EventEmitter();


  public character: Character ={
    name: "",
    power: 0
  };


  emitCharacter():void{


    console.log(this.character)
    if(this.character.name.length == 0) return;

    //llamas a la propiedad eventEmiter ( que se encarga de emitir algo a otro lado)
    //y mediante el metodo emit mandas this.character a fuera del componente
    this.onNewCharacter.emit({...this.character})
    this.character.name = "";
    this.character.power = 0;
  }
}
