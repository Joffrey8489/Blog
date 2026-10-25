import { Component } from '@angular/core';

@Component({
  selector: 'app-container',  
  imports: [],
  templateUrl: './container.html',
  styleUrl: './container.css',
})
export class Container {
    publicacoes = [
    {
      imagem: 'assets/images/DSC_0392.JPG',
      descricao: 'Participação num encontro sobre tecnologia e inovação.',
      data: '20 Setembro 2026',
      local: 'Maputo, Moçambique',
      comentarios: 24,
      likes: 127
    
    },
    {
      imagem: 'assets/images/DSC_0392.JPG',
      descricao: 'Desenvolvimento de uma nova aplicação web utilizando Angular.',
      data: '18 Setembro 2026',
      local: 'Maputo, Moçambique',
      comentarios: 24,
      likes: 98
    
    },
    {
      imagem: 'assets/images/DSC_0392.JPG',
      descricao: 'Momento de aprendizagem e partilha de conhecimentos com a equipa.',
      data: '15 Setembro 2026',
      local: 'Matola, Moçambique',
      comentarios: 24,
      likes: 76
    },
    {
      imagem: 'assets/images/DSC_0392.JPG',
      descricao: 'Apresentação de um projecto de software desenvolvido recentemente.',
      data: '12 Setembro 2026',
      local: 'Maputo, Moçambique',
      likes: 143,
      comentarios: 84
    },
    {
      imagem: 'assets/images/DSC_0392.JPG',
      descricao: 'Participação numa actividade de desenvolvimento e programação.',
      data: '09 Setembro 2026',
      local: 'Maputo, Moçambique',
      likes: 112,
      comentarios: 454
    },
    {
      imagem: 'assets/images/DSC_0392.JPG',
      descricao: 'Visita e participação num evento dedicado à tecnologia.',
      data: '05 Setembro 2026',
      local: 'Maputo, Moçambique',
      likes: 87,
      comentarios: 645
    },
    {
      imagem: 'assets/images/DSC_0392.JPG',
      descricao: 'Finalização de mais uma etapa importante de um projecto.',
      data: '01 Setembro 2026',
      local: 'Maputo, Moçambique',
      likes: 156,
      comentarios: 324
    }
  ];
}
