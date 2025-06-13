import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Credito } from '../models/credito.model';

@Injectable({
  providedIn: 'root'
})
export class ConsultaCreditoService {

  private apiUrl = environment.hostApi;

  constructor(private httpClient: HttpClient) {}

  buscarPorNumeroNfse(numeroNfse: string): Observable<Credito[]> {
    return this.httpClient
      .get<Credito[]>(`${this.apiUrl}/creditos/${numeroNfse}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  buscarPorNumeroCredito(numeroCredito: string): Observable<Credito[]> {
    return this.httpClient
      .get<Credito[]>(`${this.apiUrl}/creditos/credito/${numeroCredito}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: any) {
    console.error('Erro na consulta de crédito:', error);
    return throwError(() => new Error('Falha ao buscar crédito. Tente novamente mais tarde.'));
  }
}