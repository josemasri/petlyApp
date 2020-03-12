import { Component } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { FiltersComponent } from '../../components/filters/filters.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  data = [];

  constructor(
    public popoverController: PopoverController
  ) {}


  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: FiltersComponent,
      event: ev,
      translucent: true
    });
    return await popover.present();
  }


  doRefresh(event) {
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }


  loadData(event) {
    setTimeout(() => {
      event.target.complete();

      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      if (this.data.length === 1000) {
        event.target.disabled = true;
      }
    }, 2000);
  }
}

