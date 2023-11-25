import { Component } from "@angular/core";
import { Character } from "../interfaces/character.interface";
import { DbzService } from "../services/dragonballz.service";

@Component({
  selector: "app-dbz-main-page",
  templateUrl: "./main-page.component.html"
})
export class MainPageComponent{

  //private name: string: si se pone en el constructor... se creara esa propiedad! sin crearla afurea
  //en angular poner estas cosas en el constructor se usa para injeccion
  // de dependencias


  //esto habilita en TODO el componente (del main page)
  //toda la inf que este siendo utilizada ene ste servicio
  constructor(private dbzService: DbzService){}


  get characters():Character[]{
    return [...this.dbzService.characters];
  }

  onDeleteCharacter(id: string):void{
    this.dbzService.DeleteCharacterById( id );
  }

  onNewCharacter(character: Character): void{
    this.dbzService.addCharacter( character )
  }
}
