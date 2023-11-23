import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <p>Counter: {{counter}}</p>

    <button (click)="counterPlus()">Aumentar counter</button>
    <button (click)="counterMinus()">restar counter</button>
    <button (click)="reset()">Reset</button>


  `
})
export class counterComponent{
  constructor() { }

  public counter: number = 10;


  reset(){
    this.counter = 10;
  }

  counterPlus(): void{
    this.counter++;
  }

  counterMinus(): void{
    this.counter--;
  }

}
