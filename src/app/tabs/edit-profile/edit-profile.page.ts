import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage {
  user: any;

  constructor(private navCtrl: NavController) {
    const userData = history.state.user;
    this.user = userData ? { ...userData } : {};
  }

  saveChanges() {
    const updatedUser = { ...this.user };
    this.navCtrl.navigateBack('tabs/account', { state: { user: updatedUser } });
  }
}
