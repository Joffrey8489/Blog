import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class HeaderComponent implements OnInit, OnDestroy {

  currentSlide = 0;

  slides = [
    {
      image: 'assets/images/DSC_0392.JPG',
      title: 'Joffrey Sewane',
      description: 'A man in his Business'
    },
    {
      image: 'assets/images/IMG_9035.jpg',
      title: 'Joffrey Sewane',
      description: 'A man in his Business'
    },
    {
      image: 'assets/images/IMG_9051.JPG',
      title: 'Joffrey Sewane',
      description: 'A man in his Business'
    }
  ];

  private intervalId?: ReturnType<typeof setInterval>;

  ngOnInit(): void {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 300);
  }

  nextSlide(): void {
    this.currentSlide =
      (this.currentSlide + 1) % this.slides.length;
  }

  goToSlide(index: number): void {
    this.currentSlide = index;
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}