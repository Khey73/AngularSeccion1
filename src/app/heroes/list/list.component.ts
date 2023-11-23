import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroNames: string[] = ["Spideman", "Ironman", "Hulk", "She Hulk", "Thor"];
  public deletedHero?: string;
  //mike 10/10
  // public heroesBorrados: string[] = [];

  // public borrarUltimoHeroe(): void{
  //   if(this.heroNames.length !== 0){

  //     let lastHeroe = this.heroNames[this.heroNames.length - 1]
  //     this.heroesBorrados.push(lastHeroe)
  //     console.log(this.heroesBorrados)
  //     this.heroNames.pop();
  //   }else{
  //     alert("No puedes borrar heroes, ya que ya no hay!")
  //   }
  // }

  public removeLastHeroe():void{
    this.deletedHero = this.heroNames.pop();
  }


}
