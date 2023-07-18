import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-plumbing',
  templateUrl: './plumbing.page.html',
  styleUrls: ['./plumbing.page.scss'],
})
export class PlumbingPage implements OnInit {
  formData: any = {}; // Form data object to store user input

  constructor(private router: Router) {}

  goToOtherPage() {
    this.router.navigateByUrl('/tabs/home');
  }
  submitCheckoutForm() {
    this.router.navigateByUrl('/tabs/orders');
  }
  ngOnInit() {}
}
