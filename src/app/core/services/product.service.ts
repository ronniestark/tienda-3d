import { Injectable, signal } from '@angular/core';
import { Product } from '../models/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  // Usamos Signals para almacenar el estado de los productos
  private productsSignal = signal<Product[]>([
    {
      id: '1',
      name: 'Emblema Rojo JDM',
      description: 'Emblema impreso en resina ABS. Ajuste perfecto para parrilla frontal.',
      category: 'repuestos-auto',
      price: 15.99,
      stock: 10,
      imageUrl: 'assets/images/emblema-jdm.jpg'
    },
    {
      id: '2',
      name: 'Espaciador para Sensor de Oxígeno',
      description: 'Extensión roscada impresa en metal/resina de alta temperatura para modificaciones de sistema de escape (Header).',
      category: 'repuestos-auto',
      price: 12.50,
      stock: 5,
      imageUrl: 'assets/images/sensor-spacer.jpg'
    },
    {
      id: '3',
      name: 'Figura de Acción Articulada',
      description: 'Figura impresa en PLA con articulaciones móviles.',
      category: 'figuras',
      price: 25.00,
      stock: 3,
      imageUrl: 'assets/images/figura.jpg'
    }
  ]);

  constructor() { }

  // Método para obtener todos los productos
  getAllProducts() {
    return this.productsSignal();
  }

  // Método para filtrar por categoría
  getProductsByCategory(category: string) {
    return this.productsSignal().filter(product => product.category === category);
  }
}