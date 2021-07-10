import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})

export class CarouselComponent implements OnInit {
  images: Array<String> = ['https://cdn.pixabay.com/photo/2013/07/12/15/06/guitar-149427__340.png',
                          'https://cdn.pixabay.com/photo/2012/04/13/20/54/violin-33610__340.png',
                          'https://cdn.pixabay.com/photo/2014/04/03/00/35/drums-308752__340.png'
] 
  constructor() { }

  ngOnInit(): void {
  }

}

