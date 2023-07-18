import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-recent-transaction',
  templateUrl: './recent-transaction.component.html',
  styleUrls: ['./recent-transaction.component.scss'],
})
export class RecentTransactionComponent {
  @Input() transaction: any;

  getTransactionIcon(type: string): string {
    switch (type.toLowerCase()) {
      case 'payment':
        return 'cash-outline';
      case 'refund':
        return 'arrow-back-outline';
      default:
        return 'help-outline';
    }
  }

  showDetails() {
  }
}
