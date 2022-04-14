import { Pipe, PipeTransform } from '@angular/core';
import { memoize } from 'lodash-es';

@Pipe({
  name: 'logoLodash'
})
export class LogoLodashPipe implements PipeTransform {
  constructor() {
    console.log('logo-lodash-pipe-created');
  }

  logoCache = memoize(this.getLogo);

  transform(value: string): string {
    return this.logoCache(value);
  }

  getLogo(value: string): string {
    console.log(`logo-lodash-pipe-${value}`);
    return `https://www.formula1.com/content/dam/fom-website/teams/2022/${value.toLowerCase().replace(/ /g, '-')}-logo.png.transform/2col/image.png`
  }
}
