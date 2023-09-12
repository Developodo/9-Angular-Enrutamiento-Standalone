import { Routes } from '@angular/router';
import { AngularComponent } from './pages/about/angular/angular.component';
import { AuthorComponent } from './pages/about/author/author.component';
import { E404Component } from './pages/e404/e404.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { title: 'Inicio', path: 'home', component: HomeComponent },
  {
    title: 'Conductor',
    path: 'driver/:name',
    loadComponent: () =>
      import('./pages/driver/driver.component').then((m) => m.DriverComponent),
  },
  {
    title: 'About',
    path: 'about',
    loadComponent: () =>
      import('./pages/about/about.component').then((m) => m.AboutComponent),
    children: [
      { title: 'Autor', path: 'author', component: AuthorComponent },
      {
        title: 'Angular',
        path: 'angular',
        component: AngularComponent,
      },
      { path: '', redirectTo: '/about/author', pathMatch: 'full' },
    ],
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // redirect to `first-component`
  { path: '**', component: E404Component }, // Wildcard route for a 404 page
];
