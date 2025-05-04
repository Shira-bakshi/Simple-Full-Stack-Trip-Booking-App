import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent  implements OnInit{

  constructor() {
  }
  ngOnInit(): void {
    var slides = document.querySelectorAll('.slide');
    var index = 0;
    function showSlide() {
      slides[index].classList.add('show');
      setTimeout(hideSlide, 5000);
    }
    function hideSlide() {
      slides[index].classList.remove('show');
      index = (index + 1) % slides.length;
      showSlide();
    } 
    showSlide();
  }
}
