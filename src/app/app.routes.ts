import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' }, // Redirige desde la ruta vacía a /home
    { path: 'home', component: HomeComponent }, // Ruta para el componente Home
    { path: 'portfolio', component: PortfolioComponent }, // Ruta para el componente Home
    { path: 'about', component: AboutComponent }, // Ruta para el componente Home
    { path: 'contact', component: ContactComponent }, // Ruta para el componente Home
];
