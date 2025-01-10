import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';  // Importa RouterLink
import { CommonModule } from '@angular/common'; // Para usar *ngIf, *ngFor, etc.

@Component({
  selector: 'app-interface-user',
  standalone: true,  // Indica que es un componente standalone
  imports: [RouterLink, CommonModule],  // Asegúrate de importar RouterLink
  templateUrl: './interface-user.component.html',
  styleUrls: ['./interface-user.component.css']
})
export class InterfaceUserComponent {
  activeSection: string = 'usuario';  // La primera sección en aparecer será la de Usuario
  imageUrl: string = 'assets/images/miimagen.jpg';
  setActiveSection(section: string): void {
    this.activeSection = section;
  }
}
