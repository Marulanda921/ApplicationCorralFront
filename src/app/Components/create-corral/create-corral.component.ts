import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CorralService } from '../../Services/corral.service';
import { Corral } from '../../models/corral';

@Component({
  selector: 'app-create-corral',
  templateUrl: './create-corral.component.html',
  styleUrls: ['./create-corral.component.css']
})
export class CreateCorralComponent {
  corral: Corral = {
    id: 0, 
    name: '',
    capacity: 1
  };

  constructor(private corralService: CorralService, private router: Router) {}


  async onSubmit(form: NgForm): Promise<void> {
    if (form.valid) {
      try {
        const response = await this.corralService.createCorral(this.corral);
        console.log('Corral creado:', response);
        form.reset();
        window.location.reload();
        await this.router.navigate(['/']); 
      } catch (error) {
        console.error('Error al crear corral:', error);
      }
    }
  }

  goBack(): void {
    this.router.navigate(['/']); 
  }
}
