import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appHeavyComputation',
  standalone: true,
})
export class AppHeavyComputationPipe implements PipeTransform {
  transform(name: null | undefined, index: number): null;
  transform(name: string | number, index: number): string;
  transform(
    name: string | number | null | undefined,
    index: number,
  ): string | null {
    return typeof name === 'string' || typeof name === 'number'
      ? `${name} - ${index}`
      : null;
  }
}
