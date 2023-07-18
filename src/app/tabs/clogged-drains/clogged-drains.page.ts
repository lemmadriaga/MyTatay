import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clogged-drains',
  templateUrl: './clogged-drains.page.html',
  styleUrls: ['./clogged-drains.page.scss'],
})
export class CloggedDrainsPage implements OnInit {
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
