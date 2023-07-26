import { Component, ElementRef, OnInit } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  
  constructor(){}

  ngOnInit(): void {
    AOS.init(
      {
        startEvent: 'DOMContentLoaded',
        duration: 200,
        delay: 5,
      }
    );

  }
}
