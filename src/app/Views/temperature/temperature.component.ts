import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';  // Importamos CommonModule

@Component({
  selector: 'app-temperature',
  standalone: true,
  imports: [CommonModule],  // Asegúrate de importar CommonModule para usar *ngIf
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.css']
})
export class TemperatureComponent implements OnInit {
  cajaId: string | null = '';
  isLoaded: boolean = false; // Bandera para controlar la carga

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Simula una breve espera para marcar como cargado
    setTimeout(() => {
      this.isLoaded = true;
    }, 200); // Ajusta el tiempo según sea necesario

    // Obtener el id de la URL
    this.cajaId = this.route.snapshot.paramMap.get('id');
  }

  goBack(): void {
    if (this.cajaId) {
      this.router.navigate([`/box-info/${this.cajaId}`]);  // Navegar al BoxInfoComponent con el id
    } else {
      this.router.navigate(['/selector']);  // En caso de que no se encuentre el id, redirige a Selector
    }
  }
}
