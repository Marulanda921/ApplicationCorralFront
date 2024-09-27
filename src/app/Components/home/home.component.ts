import { Component, OnInit } from '@angular/core';
import { AnimalService } from 'src/app/Services/animal.service';
import { CorralService } from 'src/app/Services/corral.service';
import { AnimalResponse } from 'src/app/models/AnimalResponse';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  corrals: any[] = [];
  animals: AnimalResponse[] = [];
  highRiskAnimals: AnimalResponse[] = [];
  selectedCorralId: number | null = null;
  formToShow: string = '';

  constructor(
    private animalService: AnimalService,
    private corralService: CorralService
  ) {}

  async ngOnInit(): Promise<void> {
    try {
      await this.getCorrals();
      await this.loadHighRiskAnimals();
    } catch (error) {
      console.error('Error al inicializar el componente:', error);
    }
  }

  async getCorrals(): Promise<void> {
    try {
      this.corrals = await this.corralService.getAllCorrals();
    } catch (err) {
      console.error('Error fetching corrals', err);
    }
  }

  async getAnimalsByCorral(corralId: number): Promise<void> {
    try {
      this.animals = await this.animalService.getAnimalsByCorral(corralId);
    } catch (err) {
      console.error('Error fetching animals', err);
    }
  }

  async loadHighRiskAnimals(): Promise<void> {
    try {
      this.highRiskAnimals = await this.animalService.getHighRiskAnimals();
    } catch (error) {
      console.error('Error al obtener animales riesgosos', error);
    }
  }

  async onCorralChange(event: Event): Promise<void> {
    const target = event.target as HTMLSelectElement;
    const selectedId = parseInt(target.value, 10);
    this.selectedCorralId = selectedId;

    if (selectedId) {
      try {
        await this.getAnimalsByCorral(selectedId);
      } catch (err) {
        console.error('Error al cambiar el corral', err);
      }
    } else {
      this.animals = [];
    }
  }

  showForm(formType: string): void {
    this.formToShow = formType;
  }

  goBack(): void {
    this.formToShow = '';
  }
}
