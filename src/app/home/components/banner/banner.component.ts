import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  images: string[] = [
    'assets/banner-1.jpg',
    'assets/banner-2.jpg',
    'assets/banner-3.jpg',
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
