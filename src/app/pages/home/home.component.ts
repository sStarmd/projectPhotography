import { NgClass, NgFor } from '@angular/common';
import { Component,} from '@angular/core';
import { PortfolioComponent } from "../portfolio/portfolio.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor, NgClass, PortfolioComponent,PortfolioComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  images = [
    { src: '../../../assets/img/photo/img1.jpg', alt: 'Image 1', class: 'img1' },
    { src: '../../../assets/img/photo/img2.jpg', alt: 'Image 2', class: 'img2' },
    { src: '../../../assets/img/photo/img3.jpg', alt: 'Image 3', class: 'img3' },
    { src: '../../../assets/img/photo/img4.jpg', alt: 'Image 4', class: 'img4' },
    { src: '../../../assets/img/photo/img5.jpg', alt: 'Image 5', class: 'img5' },
    { src: '../../../assets/img/photo/img6.jpg', alt: 'Image 6', class: 'img6' },
    { src: '../../../assets/img/photo/butterfly1.jpeg', alt: 'Image 7', class: 'img7' },
    { src: '../../../assets/img/photo/butterfly2.jpg', alt: 'Image 8', class: 'img8' },
    { src: '../../../assets/img/photo/crow.jpg', alt: 'Image 9', class: 'img9' },
  ];
  // images = [
  //   { url: 'https://www.dropbox.com/s/abcd1234/imagen1.jpg?dl=1' },
  //   { url: 'https://www.dropbox.com/s/abcd1234/imagen2.jpg?dl=1' },
  //   { url: 'https://www.dropbox.com/s/abcd1234/imagen3.jpg?dl=1' }
  // ]; update in drive
}