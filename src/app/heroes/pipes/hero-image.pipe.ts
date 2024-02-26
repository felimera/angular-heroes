import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/hero.interface';
import { environments } from '../../../environments/environments';

@Pipe({
  name: 'heroImage'
})
export class HeroImagePipe implements PipeTransform {

  private baseUrlImag: string = environments.baseUrlImag;

  transform(hero: Hero): string {
    if (!hero.id && !hero.alt_img)
      return 'assets/no-image.png';
    if (hero.alt_img)
      return hero.alt_img;
    return `${this.baseUrlImag}/${hero.id}.jpg`;
  }

}
