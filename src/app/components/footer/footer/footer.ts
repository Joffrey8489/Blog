import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.html'
})
export class Footer {

  tecnologias = [
    'HTML5',
    'CSS3',
    'JavaScript',
    'TypeScript',
    'Angular',
    'node.js',
    'GitHub'
  ];

  apoios = [
    'Casa da Ciência',
    'The best Quality services',
    'Comunidade Tecnológica'
  ];

}