import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, } from '@angular/core';
import { Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { NavController } from '@ionic/angular';


interface GridItem {
  icon: string;
  label: string;
  page: string;
}

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
  standalone: true, 
  imports: [CommonModule, FontAwesomeModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  
  
})
export class CategoriesComponent {
  handlerMessage = '';
  roleMessage = '';

  gridData: GridItem[][] = [
    [
      { icon:  "../assets/cloth.png", label: 'Cleaning', page: 'cleaning' },
      { icon: '../assets/washing-machine.png', label: 'Laundry Repair', page: 'laundry-repair' },
      { icon: '../assets/pipe.png', label: 'Clogged Drains', page: 'clogged-drains' },
      { icon: '../assets/plumbing.png', label: 'Plumbing', page: 'plumbing' }
    ],
    [
      { icon: '../assets/drill.png', label: 'Wood works', page: 'wood-works' },
      { icon: '../assets/paint-roller.png', label: 'Painter', page: 'painter' },
      { icon: '../assets/under-construction.png', label: 'Construction', page: 'construction' },
      { icon: '../assets/cabinet.png', label: 'Cabinet maker', page: 'cabinet-maker' }
    ]
  ];                                              

  constructor(private router: Router) {}

  handleCardClick(item: GridItem) {
    console.log('Clicked card:', item);
    this.navigateToPage(item.page); 
  }

  navigateToPage(page: string) {
    if (page === 'cleaning') {
      this.router.navigateByUrl('/tabs/cleaning');
    }
    if (page === 'laundry-repair') {
      this.router.navigateByUrl('/tabs/laundry-repair');
    }
    if (page === 'clogged-drains') {
      this.router.navigateByUrl('/tabs/clogged-drains');
    }
    if (page === 'plumbing') {
      this.router.navigateByUrl('/tabs/plumbing');
    }
    if (page === 'wood-works') {
      this.router.navigateByUrl('/tabs/wood-works');
    }
    if (page === 'painter') {
      this.router.navigateByUrl('/tabs/painter');
    }
    if (page === 'construction') {
      this.router.navigateByUrl('/tabs/construction');
    }
    if (page === 'cabinet-maker') {
      this.router.navigateByUrl('/tabs/cabinet-maker');
    }
  }
  
}