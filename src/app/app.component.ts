import { Component } from '@angular/core';
import { ConsultaCreditoComponent } from "./consulta-credito/consulta-credito/consulta-credito.component";

@Component({
  selector: 'app-root',
  imports: [ConsultaCreditoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'consulta-credito';
}
