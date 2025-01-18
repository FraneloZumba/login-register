import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-box-info',
  standalone: true,
  imports: [CommonModule], // Asegúrate de importar CommonModule para usar *ngIf
  templateUrl: './box-info.component.html',
  styleUrls: ['./box-info.component.css'], // El CSS se manejará directamente aquí
})
export class BoxInfoComponent implements OnInit {
  cajaId: number = 0;
  isLoaded: boolean = false; // Bandera para controlar la carga

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    // Simula una breve espera para marcar como cargado
    setTimeout(() => {
      this.isLoaded = true;
    }, 200); // Ajusta el tiempo según sea necesario

    // Obtener el ID de la caja desde los parámetros de ruta
    this.route.paramMap.subscribe(params => {
      this.cajaId = +params.get('id')!;
    });
  }

  goToTemperatureInterface() {
    this.router.navigate(['/temperature']);
  }

  goToCamerasInterface() {
    this.router.navigate(['/cameras']);
  }

  goToHumidityInterface() {
    this.router.navigate(['/humidity']);
  }

  goToWeightInterface() {
    this.router.navigate(['/weight']);
  }

  goBack(): void {
    this.router.navigate(['/selector']);
  }
}
