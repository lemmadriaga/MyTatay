import { Component, OnInit, AfterViewInit } from '@angular/core';
import anime from 'animejs/lib/anime.es.js';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
})
export class OrdersPage implements OnInit, AfterViewInit {

  drawer_open = false;
  cta_button_show: any;
  cta_button_hide: any;
  slidedown: any;
  slideup: any;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    const ctaButton = document.querySelector(".cta-button") as HTMLElement;
    const backButton = document.querySelector(".back-btn") as HTMLElement;

    ctaButton.addEventListener("mouseup", () => {
      this.cta_button_hide.play();
    });

    backButton.addEventListener("mouseup", () => {
      if (this.drawer_open) {
        this.slidedown.play();
        this.cta_button_show.play();
      }
    });

    this.cta_button_show = anime({
      targets: ['.cta-button', '.cta-text'],
      translateY: ['-15', '0'],
      opacity: ['0', '1'],
      easing: 'easeInOutSine',
      delay: anime.stagger(200),
      autoplay: false,
      duration: 500,
      complete: () => {}
    });

    this.cta_button_hide = anime({
      targets: ['.cta-button', '.cta-text'],
      translateY: ['0', '-15'],
      opacity: ['1', '0'],
      easing: 'easeInOutSine',
      delay: anime.stagger(200),
      autoplay: false,
      duration: 500,
      complete: () => {
        this.slideup.play();
        this.drawer_open = true;
      }
    });

    this.slidedown = anime({
      targets: '.order-details-container',
      translateY: ['-560', '-40px'],
      duration: 1000,
      autoplay: false,
      begin: () => {
        this.show_hideCTA("block");
        this.drawer_open = false;
      }
    });

    this.slideup = anime({
      targets: '.order-details-container',
      translateY: ['-40px', '-560px'],
      autoplay: false,
      begin: () => {
        this.show_hideCTA("none");
      }
    });
  }

  show_hideCTA(param: string) {
    const ctaButton = document.querySelector(".cta-button") as HTMLElement;
    const ctaText = document.querySelector(".cta-text") as HTMLElement;

    if (ctaButton && ctaText) {
      ctaButton.style.display = param;
      ctaText.style.display = param;
    }
  }
}
