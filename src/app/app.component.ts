import { Component } from '@angular/core';
import { ConsultaCreditoComponent } from './consulta-credito/views/consultainicial/consulta-credito.component';

@Component({
  selector: 'app-root',
  imports: [ConsultaCreditoComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'consulta-credito';
}
