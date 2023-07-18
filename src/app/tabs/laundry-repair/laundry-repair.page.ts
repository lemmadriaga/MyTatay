import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-laundry-repair',
  templateUrl: './laundry-repair.page.html',
  styleUrls: ['./laundry-repair.page.scss'],
})
export class LaundryRepairPage implements OnInit {
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
