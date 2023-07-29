import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  images = [
    'assets/pool1.jpeg',
    'assets/pool2.jpeg',
    'assets/pool5.jpeg',
    'assets/pool6.jpeg',

    'assets/pool_const.jpeg',
    'assets/pool3.jpeg',
    'assets/pool_plan.jpeg',
    'assets/land.jpeg',

    'assets/build1.jpeg',
    'assets/build2.jpeg',
    'assets/build_plan.jpeg',
    'assets/build_const.jpeg',
  ];

  currentIndex = 0;

  @ViewChild('galleryContainer') galleryContainer!: ElementRef ;

  showPreview(index: number): void {
    this.currentIndex = index;
  }

  next(): void {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
    this.slideGallery('next');
  }

  prev(): void {
    this.currentIndex =
      (this.currentIndex - 1 + this.images.length) % this.images.length;
    this.slideGallery('prev');
  }

  private slideGallery(direction: 'next' | 'prev'): void {
    const galleryWidth = this.galleryContainer.nativeElement.offsetWidth;
    const distance = direction === 'next' ? -galleryWidth : galleryWidth;

    this.galleryContainer.nativeElement.style.transition =
      'transform 0.3s ease-in-out';
    this.galleryContainer.nativeElement.style.transform = `translateX(${distance}px)`;

    setTimeout(() => {
      this.galleryContainer.nativeElement.style.transition = 'none';
      this.galleryContainer.nativeElement.style.transform = 'translateX(0)';
    }, 300);
  }

  constructor() {}

  ngOnInit(): void {}
}
