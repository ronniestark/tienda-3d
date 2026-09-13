import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'catalogo/:categoria',
    renderMode: RenderMode.Prerender,
    // ¡Agregamos 'async' aquí!
    getPrerenderParams: async () => { 
      return [
        { categoria: 'figuras' },
        { categoria: 'llaveros' },
        { categoria: 'utensilios-cocina' },
        { categoria: 'herramientas' },
        { categoria: 'repuestos-auto' }
      ];
    }
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];