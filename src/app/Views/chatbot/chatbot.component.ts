import { Component } from '@angular/core';
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
export class ChatbotComponent {
  messages: any[] = [];
  userMessage: string = '';
  
  // Inyecta el Router en el constructor
  constructor(private router: Router) {}

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
