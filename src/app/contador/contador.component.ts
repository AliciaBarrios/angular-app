import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent {

  valorContador: number = 0;

  incrementar() {
    this.valorContador++;
  }

  decrementar() {
    if(this.valorContador > 0) {
      this.valorContador--;
    }
  }

}
