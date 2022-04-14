import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'logo'
})
export class LogoPipe implements PipeTransform {
  constructor() {
    console.log('logo-pipe-created');
  }

  transform(value: string): string {
    console.log(`logo-pipe-${value}`);
    return `https://www.formula1.com/content/dam/fom-website/teams/2022/${value.toLowerCase().replace(/ /g, '-')}-logo.png.transform/2col/image.png`
  }
}
