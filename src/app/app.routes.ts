import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: 'cocktails',
    loadChildren: () => import('./cocktails/cocktail.routing').then(m => m.cocktailRouting)
  },
  {
    path: '**',
    redirectTo: '/cocktails',
    pathMatch: "full"
  },
];
