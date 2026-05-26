import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'landing',
    loadComponent: () => import('./features/auth/pages/landing/landing.page').then( m => m.LandingPage)
  },
  {
    path: 'login',
    loadComponent: () => import('./features/auth/pages/login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'register',
    loadComponent: () => import('./features/auth/pages/register/register.page').then( m => m.RegisterPage)
  },
  {
    path: 'home',
    loadComponent: () => import('./features/dashboard/pages/home/home.page').then( m => m.HomePage)
  },
  {
    path: 'reservations',
    loadComponent: () => import('./features/dashboard/pages/reservations/reservations.page').then( m => m.ReservationsPage)
  },
  {
    path: 'qr-reader',
    loadComponent: () => import('./features/dashboard/pages/qr-reader/qr-reader.page').then( m => m.QrReaderPage)
  },
];
