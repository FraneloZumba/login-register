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

  // Método para regresar a la página de Selector
  goBack(): void {
    this.router.navigate(['/selector']);  // Ahora se usa correctamente 'this.router'
  }
}
