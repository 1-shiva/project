import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shivaaa'
})
export class ShivaaaPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}

