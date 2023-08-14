import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  images = [
    { src: 'assets/pool1.jpeg', project: 'Swimming Pool', location: 'Accra'},
    { src: 'assets/pool2.jpeg', project: 'Swimming Pool', location: 'Accra'},
    { src: 'assets/pool5.jpeg', project: 'Swimming Pool', location: 'Accra'},
    { src:  'assets/pool6.jpeg', project: 'Swimming Pool', location: 'Kumasi'},

    { src: 'assets/pool_const.jpeg', project: 'Swimming Pool Construction', location: 'Accra'},
    { src: 'assets/pool3.jpeg', project: 'Swimming Pool'},
    { src: 'assets/pool_plan.jpeg', project: 'Swimming Pool planning', location: 'Cape Coast'},
    { src: 'assets/land.jpeg', project: 'Land Surveying', location: 'Accra'},

    { src: 'assets/build1.jpeg', project: 'Building Construction', location: 'Accra'},
    { src: 'assets/build2.jpeg', project: 'Building Construction', location: 'Tamale'},
    { src: 'assets/build_plan.jpeg', project: 'Building Planning', location: 'Accra'},
    { src: 'assets/build_const.jpeg', project: 'Building Construction', location: 'Kumasi'},
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
