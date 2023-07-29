import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  images = [
    { src: 'assets/pool1.jpeg', caption: 'Swimming Pool'},
    { src: 'assets/pool2.jpeg', caption: 'Swimming Pool'},
    { src: 'assets/pool5.jpeg', caption: 'Swimming Pool'},
    { src:  'assets/pool6.jpeg', caption: 'Swimming Pool'},

    { src: 'assets/pool_const.jpeg', caption: 'Swimming Pool Construction'},
    { src: 'assets/pool3.jpeg', caption: 'Swimming Pool'},
    { src: 'assets/pool_plan.jpeg', caption: 'Swimming Pool planning'},
    { src: 'assets/land.jpeg', caption: 'Land Surveying'},

    { src: 'assets/build1.jpeg', caption: 'Building Construction'},
    { src: 'assets/build2.jpeg', caption: 'Building Construction'},
    { src: 'assets/build_plan.jpeg', caption: 'Building Planning'},
    { src: 'assets/build_const.jpeg', caption: 'Building Construction'},
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
