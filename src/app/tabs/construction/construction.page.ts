import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-construction',
  templateUrl: './construction.page.html',
  styleUrls: ['./construction.page.scss'],
})
export class ConstructionPage implements OnInit {
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
