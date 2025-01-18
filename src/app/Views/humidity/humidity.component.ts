import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common'; // Asegúrate de importar CommonModule

@Component({
  selector: 'app-humidity',
  standalone: true,
  imports: [CommonModule],  // Añade CommonModule aquí
  templateUrl: './humidity.component.html',
  styleUrls: ['./humidity.component.css']
})
export class HumidityComponent implements OnInit {
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
