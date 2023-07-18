import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cabinet-maker',
  templateUrl: './cabinet-maker.page.html',
  styleUrls: ['./cabinet-maker.page.scss'],
})
export class CabinetMakerPage implements OnInit {
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
