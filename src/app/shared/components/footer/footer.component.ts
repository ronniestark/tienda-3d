import { Component } from '@angular/core';
import { RouterLink } from '@angular/router'; // <-- Importar RouterLink

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink], // <-- Inyectarlo en los imports del componente
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent { }