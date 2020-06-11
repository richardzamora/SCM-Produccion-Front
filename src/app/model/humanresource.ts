import {WorkShift} from './workShift';

export class Humanresource {
  constructor(
    public code: number,
    public dni: string,
    public name: string,
    public workShift: WorkShift
  ){}
}
