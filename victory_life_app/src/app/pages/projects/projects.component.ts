import { Component, OnInit } from '@angular/core';

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

  selectedImage: string = '';

  showImagePreview(image: string) {
    this.selectedImage = image;
  }

  closeImagePreview() {
    this.selectedImage = '';
  }

  constructor() {}

  ngOnInit(): void {}
}
