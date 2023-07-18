import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wood-works',
  templateUrl: './wood-works.page.html',
  styleUrls: ['./wood-works.page.scss'],
})
export class WoodWorksPage implements OnInit {

  formData: any = {}; 

  constructor(private router: Router) {}

  goToOtherPage() {
    this.router.navigateByUrl('/tabs/home');
  }
  submitCheckoutForm() {
    this.router.navigateByUrl('/tabs/orders');
  }
  ngOnInit() {}
}
