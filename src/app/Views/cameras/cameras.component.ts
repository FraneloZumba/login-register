import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';  
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cameras',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cameras.component.html',
  styleUrls: ['./cameras.component.css']
})
export class CamerasComponent {
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
