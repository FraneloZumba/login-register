import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-box-info',
  templateUrl: './box-info.component.html',
  styleUrls: ['./box-info.component.css']
})
export class BoxInfoComponent implements OnInit {

  cajaId: number = 0;

  constructor(private route: ActivatedRoute, private router: Router) {
    // Obtenemos el id de la caja desde la URL
    this.route.params.subscribe(params => {
      this.cajaId = +params['id'];  // Convertir el parámetro en número
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.cajaId = +params.get('id')!;
    });
  }

  goToTemperatureInterface() {
    this.router.navigate(['/temperature']);  // Navegar a la página de la interfaz de usuario
  }

  goToCamerasInterface() {
    this.router.navigate(['/cameras']);  // Navegar a la página de cámaras
  }
  
  goToHumidityInterface() {
    this.router.navigate(['/humidity']);  // Navegar a la página de humedad
  }
  
  goToWeightInterface() {
    this.router.navigate(['/weight']);  // Navegar a la página de peso
  }  

  goBack(): void {
    this.router.navigate(['/selector']);  // Ahora se usa correctamente 'this.router'
  }
}
