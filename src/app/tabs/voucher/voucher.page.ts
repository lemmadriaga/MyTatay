import { Component } from '@angular/core';

@Component({
  selector: 'app-voucher',
  templateUrl: './voucher.page.html', 
  styleUrls: ['./voucher.page.scss'],
})
export class VoucherPage {
  public coupons = [
    {
      title: 'Transportation Voucher',
      description: 'Free Transportation',
      code: 'TRANSPO2023',
      expiry: '2023-12-31',
      claimed: false,
    },
    {
      title: 'Cleaning Discount',
      description: 'Get 20% Discount on every transaction',
      code: 'BOGO',
      expiry: '2023-09-30',
      claimed: false,
    },
    {
      title: 'Free Needed Tool',
      description: 'Get Free tool that you need for the service',
      code: 'TATAYHELP',
      expiry: '2023-09-30',
      claimed: false,
    },
  ];

  markAsClaimed(coupon: any) {
    coupon.claimed = true;
  }
}
