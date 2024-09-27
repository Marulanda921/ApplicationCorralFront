import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {
  private baseUrl = 'https://corralproyect-latest.onrender.com/api/animals';

  constructor(private http: HttpClient) { }


 async createAnimal(animal: any): Promise<any> {
  return await firstValueFrom(this.http.post(`${this.baseUrl}`, animal));
}


async getAnimalsByCorral(corralId: number): Promise<any[]> {
  return await firstValueFrom(this.http.get<any[]>(`${this.baseUrl}/corrals/${corralId}`));
}


async getHighRiskAnimals(): Promise<any[]> {
  return await firstValueFrom(this.http.get<any[]>(`${this.baseUrl}/high-risk`));
}

async getAverageAgeByCorral(corralId: number): Promise<number> {
  return await firstValueFrom(this.http.get<number>(`${this.baseUrl}/average-age/${corralId}`));
}
}
