import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cleaning',
  templateUrl: './cleaning.page.html',
  styleUrls: ['./cleaning.page.scss'],
})
export class CleaningPage implements OnInit {
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
