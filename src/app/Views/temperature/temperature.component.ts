import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.css']
})
export class TemperatureComponent {
  cajaId: string | null = '';

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
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
