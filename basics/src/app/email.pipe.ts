import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'email'
})
export class EmailPipe implements PipeTransform {


  transform(data: string, ...args: unknown[]): unknown {


    // tchourabi@gmail.com
    // t*************@gmail.com

    const firstLettre = data[0];

    const domaine = data.split('@')[1];

    return firstLettre+'************@'+domaine;
  }

}
