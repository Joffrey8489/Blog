import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header';
import { Navbar } from '../../components/navbar/navbar';
import { Container } from '../../components/container/container';
import { Footer } from '../../components/footer/footer/footer';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, Navbar, Container, Footer],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
