import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  // Usamos Signals para manejar los productos destacados
  featuredProducts = signal([
    {
      id: 1,
      name: 'Emblema Rojo Estilo JDM',
      category: 'Repuestos de Auto',
      material: 'Resina ABS',
      icon: 'fa-car-side',
      color: '#ef4444' // Rojo
    },
    {
      id: 2,
      name: 'Espaciador de Sensor de Oxígeno',
      category: 'Repuestos de Auto',
      material: 'PETG Alta Temp',
      icon: 'fa-wrench',
      color: '#f59e0b' // Ámbar
    },
    {
      id: 3,
      name: 'Figura de Acción Articulada',
      category: 'Figuras',
      material: 'PLA Premium',
      icon: 'fa-dragon',
      color: '#8b5cf6' // Morado
    }
  ]);
}