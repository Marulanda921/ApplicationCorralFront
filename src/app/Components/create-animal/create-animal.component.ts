import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AnimalService } from '../../Services/animal.service';
import { CorralService } from '../../Services/corral.service';
import { Animal } from '../../models/animal'; // Importar la interfaz Animal
import { Corral } from '../../models/corral'; // Importar la interfaz Corral

@Component({
  selector: 'app-create-animal',
  templateUrl: './create-animal.component.html',
  styleUrls: ['./create-animal.component.css']
})
export class CreateAnimalComponent implements OnInit {
  animal: Animal = {
    name: '',
    age: null,
    dangerous: false,
    corralId: null,
    incompatibleAnimalIds: []
  };

  corrals: Corral[] = [];

  constructor(
    private animalService: AnimalService,
    private corralService: CorralService
  ) {}

  async ngOnInit(): Promise<void> {
    try {
      this.corrals = await this.corralService.getAllCorrals();
    } catch (error) {
      console.error('Error al obtener los corrales:', error);
    }
  }

  async onSubmit(form: NgForm): Promise<void> {
    if (form.valid) {
      this.animal.incompatibleAnimalIds = this.animal.incompatibleAnimalIds
        .toString()
        .split(',')
        .map(id => parseInt(id.trim(), 10))
        .filter(id => !isNaN(id));

      try {
        const response = await this.animalService.createAnimal(this.animal);
        console.log('Animal creado:', response);
        form.reset();
        window.location.reload();
      } catch (error) {
        console.error('Error al crear el animal:', error);
      }
    }
  }
}
