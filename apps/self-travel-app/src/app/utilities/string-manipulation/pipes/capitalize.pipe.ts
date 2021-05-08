import { Pipe, PipeTransform } from '@angular/core';
//https://github.com/HubSpot/humanize
@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(value: string, downCaseTail = false): unknown {
    return `${value.charAt(0).toUpperCase()}${downCaseTail ? value.slice(1).toLowerCase() : value.slice(1)}`;
  }

}
