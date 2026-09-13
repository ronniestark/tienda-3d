export interface Product {
  id: string;
  name: string;
  description: string;
  category: 'figuras' | 'llaveros' | 'utensilios-cocina' | 'herramientas' | 'repuestos-auto';
  price: number;
  stock: number;
  imageUrl: string;
}