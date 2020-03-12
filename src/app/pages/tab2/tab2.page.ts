import { Component } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  swiperOpts = {
    allowSlidePrev: false,
    allowSlideNext: false
  };

  constructor(
    private barcodeScanner: BarcodeScanner,
    private navController: NavController
  ) { }

  ionViewWillEnter() {
    this.scan();
  }

  scan() {

    this.barcodeScanner.scan().then(barcodeData => {
      if ( !barcodeData.cancelled ) {
        // console.log(barcodeData);
        const [id, tipo] = barcodeData.text.split('.');
        console.log(tipo, id);
        this.navController.navigateForward([tipo, id]);
      }

     }).catch(err => {
         console.log('Error', err);
     });

  }

}
