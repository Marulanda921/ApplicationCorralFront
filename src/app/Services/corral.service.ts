import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CorralService {
  private baseUrl = 'https://corralproyect-latest.onrender.com/api/corrals';

  constructor(private http: HttpClient) { }

  // Método asincrónico para crear un corral
  async createCorral(corral: any): Promise<any> {
    return await firstValueFrom(this.http.post(`${this.baseUrl}`, corral));
  }

  // Método asincrónico para obtener todos los corrales
  async getAllCorrals(): Promise<any[]> {
    return await firstValueFrom(this.http.get<any[]>(`${this.baseUrl}`));
  }
}
