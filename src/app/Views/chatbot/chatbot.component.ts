import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';  // Asegúrate de importar FormsModule
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-chatbot',
  standalone: true,
  imports: [CommonModule, FormsModule],  // Asegúrate de importar FormsModule aquí
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent implements OnInit {
  messages: any[] = [];
  userMessage: string = '';
  isLoaded: boolean = false;  // Bandera para controlar la carga

  // Inyecta el Router en el constructor
  constructor(private router: Router) {}

  ngOnInit(): void {
    // Simula una breve espera para marcar como cargado
    setTimeout(() => {
      this.isLoaded = true; // Marcar como cargado después de 1 segundo (simulado)
    }, 1000); // Puedes ajustar el tiempo según lo desees

    // Simulación de mensajes iniciales del chatbot
    setTimeout(() => {
      this.messages.push({ sender: 'chatbot', text: '¡Hola! ¿En qué puedo ayudarte?' });
    }, 1500); // Respuesta del chatbot después de un pequeño retraso
  }

  sendMessage() {
    if (this.userMessage.trim()) {
      this.messages.push({ sender: 'user', text: this.userMessage });
      this.userMessage = '';  // Limpiar el campo de mensaje después de enviarlo

      // Simulación de respuesta del chatbot
      setTimeout(() => {
        this.messages.push({ sender: 'chatbot', text: '¡Hola! ¿En qué puedo ayudarte?' });
      }, 1000);
    }
  }

  handleKeyPress(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      this.sendMessage();
    }
  }

  goBack(): void {
    this.router.navigate(['/selector']);  // Ahora se usa correctamente 'this.router'
  }
}
