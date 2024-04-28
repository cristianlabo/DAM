import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'fechaPipe'
})
export class FechaPipePipe implements PipeTransform {

  transform(value: Date): string {

    if(Date !=null)
      return value.toString().replace('T','\t').replace('.000Z','');

    return  Date
  }

}
