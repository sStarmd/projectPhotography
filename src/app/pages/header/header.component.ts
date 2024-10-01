import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, NgClass],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'] // Cambié de styleUrl a styleUrls para que funcione correctamente
})
export class HeaderComponent {
  constructor(private router: Router) {}

  isActive(route: string): boolean {
    return this.router.url === route; // Verifica si la ruta actual es igual a la ruta proporcionada
  }
}
