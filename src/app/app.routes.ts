import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home.component').then(m => m.HomeComponent),
    title: 'Inicio | Tienda 3D'
  },
  {
    path: 'catalogo/:categoria',
    loadComponent: () => import('./features/catalog/catalog.component').then(m => m.CatalogComponent),
  },
  {
    path: 'contacto',
    loadComponent: () => import('./features/contact/contact.component').then(m => m.ContactComponent),
    title: 'Contacto | Tienda 3D'
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];