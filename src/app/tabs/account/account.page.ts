import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage {
  user = {
    profilePhoto: '../assets/profile-pic.png',
    name: 'Lemuel Madriaga',
    email: 'lemmadriaga02@gmail.com',
    location: 'Red Bldg, Universe 2, Golden Country Homes, Alangilan, Batangas',
  };

  constructor(private navCtrl: NavController) {}

  openEditProfile() {
    this.navCtrl.navigateForward('tabs/edit-profile', { state: { user: { ...this.user } } });
  }

  ionViewWillEnter() {
    const updatedUser = history.state.user;
    if (updatedUser) {
      this.user = { ...updatedUser };
    }
  }
  services = ['Plumbing', 'Electrical', 'Painting'];

  recentTransactions = [
    {
      profilePhoto: '../assets/tatay_orders.png',
      name: 'Tatay Dodong',
      amount: 'Php 700.00',
      type: 'House Cleaning',
    },

  ];


}
