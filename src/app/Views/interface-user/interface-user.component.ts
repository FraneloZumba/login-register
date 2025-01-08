import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';  // Importa RouterLink

@Component({
  selector: 'app-interface-user',
  standalone: true,  // Indica que es un componente standalone
  imports: [RouterLink],  // Asegúrate de importar RouterLink
  templateUrl: './interface-user.component.html',
  styleUrls: ['./interface-user.component.css']
})
export class InterfaceUserComponent { }
