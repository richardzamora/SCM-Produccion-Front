import {Product} from './product';

export class Process {
  constructor(public code: number,
              public processName: string,
              public processOrder: number,
              public processTime: string,
              public stockProduced: number,
              public product: Product
  ) {
  }
}
