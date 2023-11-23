import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  //es una propiedad!, pero ena ngular se puede definir de esta manera, aunque en realidad
  // por dentro se ve asi: public title :string = "mi primera app angular"
  public title: string = 'Hola Mundo';


}
