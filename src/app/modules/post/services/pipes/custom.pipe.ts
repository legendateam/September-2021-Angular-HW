import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom',
})
export class CustomPipe implements PipeTransform {
  transform(value: string, ...args: string[]): unknown {
    return value.replace(args[0], args[1]);
  }
}
