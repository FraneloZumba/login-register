import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';  // Importa RouterModule
import { CommonModule } from '@angular/common'; // Para usar *ngIf, *ngFor, etc.

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [RouterModule, CommonModule] // Asegúrate de importar CommonModule
})
export class LoginComponent implements OnInit {
  isLoaded: boolean = false; // Bandera para controlar el estado de carga

  ngOnInit(): void {
    // Simulando una carga de 2 segundos
    setTimeout(() => {
      this.isLoaded = true; // Cambiar el estado de carga después de 2 segundos
    }, 2000);
  }
}
