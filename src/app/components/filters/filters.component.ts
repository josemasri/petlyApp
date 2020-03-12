import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent implements OnInit {

  constructor(
    private popoverController: PopoverController
  ) { }

  ngOnInit() { }

  async DismissClick() {
    await this.popoverController.dismiss();
  }

}
