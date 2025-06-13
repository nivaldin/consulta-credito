import { Component } from '@angular/core';
import { Credito } from '../models/credito.model';
import { ConsultaCreditoService } from '../services/consulta-credito.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-consulta-credito',
  imports: [CommonModule, FormsModule],
  templateUrl: './consulta-credito.component.html',
  styleUrl: './consulta-credito.component.scss'
})
export class ConsultaCreditoComponent {

  listaCreditos: Credito[] = [];
  filtroNumeroNfse: any;
  filtroNumeroCredito: any;

  constructor(private consultaCreditoService: ConsultaCreditoService) { };

  buscarPorNumeroNfse() {
    if (!this.filtroNumeroNfse) return;
    this.consultaCreditoService.buscarPorNumeroNfse(this.filtroNumeroNfse).subscribe({
      next: (listaCreditos) => {
        this.listaCreditos = listaCreditos;
      },
      error: (error) => { 
        this.listaCreditos = []
        console.error('An error occurred:', error) 
      },
      complete: () => this.filtroNumeroNfse = '',
    })
  }

    buscarPorNumeroCredito() {
    if (!this.filtroNumeroCredito) return;
    this.consultaCreditoService.buscarPorNumeroCredito(this.filtroNumeroCredito).subscribe({
      next: (listaCreditos) => {
        this.listaCreditos = listaCreditos;
      },
      error: (error) => { 
        this.listaCreditos = []
        console.error('An error occurred:', error) 
      },
      complete: () => this.filtroNumeroCredito = '',
    })
  }

}
