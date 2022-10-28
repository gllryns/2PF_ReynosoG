import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'concat',
})
export class ConcatPipe implements PipeTransform {
  transform(nombre: string, apellido: string): string {
    return nombre + ' ' + apellido;
  }
}
