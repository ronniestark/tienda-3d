import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.scss'
})
export class CatalogComponent implements OnInit {
  categoriaActual: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Nos suscribimos a los parámetros de la ruta
    // Así, si el usuario navega de "figuras" a "llaveros", el componente se entera
    this.route.paramMap.subscribe(params => {
      this.categoriaActual = params.get('categoria') || '';
    });
  }
}