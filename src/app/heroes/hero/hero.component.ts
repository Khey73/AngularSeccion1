import { Component } from '@angular/core';


@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = "ironman";
  public age: number = 45;

  //get: metodo que se usa como propiedad
  //get es una propiedad que realmente es un metodo (pero se ve como propiedad)
  //este se usa como una propiedad sin ()
  get capitalizedName(): string{
    return this.name.toUpperCase();
  }

  //metodo que juntara nombre y age
  getHeroeDescription(): string{

    return this.name +  " - " + this.age
  }

  //TAREA: crea 2 metodos
  /**
   *1.- changeHeroe, no re gresara nada, cambiara el name de heroe a spiderman
   *2.- change Age, void return, cambiara a otra edad! (10)

   3.- TODO debe cambiar!, hasta el capitalzie a mayus
   */

   public changeHeroe(): void{
    this.name = "Spiderman";
   }
   public changeAge(): void{
    this.age = 10;
   }

   //48 ngIf

   public resetForm():void {
    this.name = "ironman";
    this.age = 45;
   }

   //ngFor
}
