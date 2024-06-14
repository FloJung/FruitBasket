import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-singelfruit',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './singelfruit.component.html',
  styleUrl: './singelfruit.component.scss'
})
export class SingelfruitComponent {

@Input()fruit = {
  name: "Banane",
  img:"banana.png",
  description: "Bananen können bis zu 30 Zentimeter lang werden. Im reifen Zustand ist die Schale dick und gelb und lässt sich leicht abziehen. Das cremige bis gelbe Fruchtfleisch ist zunächst fest und stärkehaltig.",
  genus: "Bananengewächse (Musaceae) innerhalb der Einkeimblättrigen Pflanzen (Monokotyledonen)",
  stars: 3.8,
  reviews:[{name: "Waldemar W.", text: "gut für Obstsalat"},{name: "Olaf P.", text: "Kann man mal machen"}],
};

inputData = "";

@Output()fruitname = new EventEmitter<string>();

sendInputData() {
  this.fruitname.emit(this.inputData);
  this.inputData = "";
}
}
