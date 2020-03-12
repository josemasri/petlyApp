import { Pipe, PipeTransform } from '@angular/core';
import { environment } from '../../environments/environment';

@Pipe({
  name: 'img'
})
export class ImagesPipe implements PipeTransform {

  transform(img: string, type: string): string {
    return `${environment.SERVICES_URL}/img/${type}/${img}`;
  }

}
