import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-painter',
  templateUrl: './painter.page.html',
  styleUrls: ['./painter.page.scss'],
})
export class PainterPage implements OnInit {
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
