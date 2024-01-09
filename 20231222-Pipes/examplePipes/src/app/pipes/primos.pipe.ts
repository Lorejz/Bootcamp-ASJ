// primo.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'primo'
})
export class PrimoPipe implements PipeTransform {
    
  transform(numbers: number[]): number[] {
    return numbers.filter(num => this.esPrimo(num));
  }

  private esPrimo(num: number): boolean {
    if (num <= 1) {
      return false;
    }
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
}