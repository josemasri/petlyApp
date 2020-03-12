import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltersComponent } from './filters/filters.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';




@NgModule({
  declarations: [FiltersComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ],
  exports: [FiltersComponent]
})
export class ComponentsModule { }
