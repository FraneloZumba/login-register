import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';  // Importar Router

@Component({
  selector: 'app-selector',
  standalone: true,
  imports: [CommonModule],  // Asegúrate de importar CommonModule
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.css']
})
export class SelectorComponent implements OnInit {

  cajas: any[] = [{ id: 1, nombre: 'Caja 1' }];
  isLoaded: boolean = false; // Bandera para controlar la carga

  constructor(private router: Router) {}  // Inyectamos el router en el constructor

  ngOnInit(): void {
    // Simula una breve espera para marcar como cargado
    setTimeout(() => {
      this.isLoaded = true;
    }, 2000); // Ajusta el tiempo según sea necesario
  }

  // Método para añadir una nueva caja
  addCaja() {
    const container = document.querySelector('.cards-container');
    if (container) {
      container.classList.add('animating');
    }

    const nuevaCaja = {
      id: this.cajas.length + 1,
      nombre: `Caja ${this.cajas.length + 1}`
    };

    setTimeout(() => {
      this.cajas.push(nuevaCaja);
      if (container) {
        container.classList.remove('animating');
      }
    }, 500);
  }

  // Método para redirigir al componente BoxInfo
  viewBoxInfo(cajaId: number) {
    this.router.navigate(['/box-info', cajaId]);  // Redirigir a BoxInfo con el id de la caja
  }

  // Método para navegar a la Interfaz de Usuario
  goToUserInterface() {
    this.router.navigate(['/interface-user']);  // Navegar a la página de la interfaz de usuario
  }

  // Método para navegar al Chatbot
  goToChatbot() {
    this.router.navigate(['/chatbot']);  // Navegar a la página del chatbot
  }
}
