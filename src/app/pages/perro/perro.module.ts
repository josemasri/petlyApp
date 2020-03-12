import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerroPageRoutingModule } from './perro-routing.module';

import { PerroPage } from './perro.page';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerroPageRoutingModule,
    PipesModule
  ],
  declarations: [PerroPage]
})
export class PerroPageModule {}
