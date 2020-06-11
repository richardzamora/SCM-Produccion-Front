import {Humanresource} from './humanresource';
import {BranchOffice} from './branchOffice';
import {Machinestate} from './machinestate';
import {MachineryType} from './machineryType';

export class Machinery {
  constructor(
    public code: number,
    public name: string,
    public reference: string,
    public productionCapacity: string,
    public branchOfficeBean: BranchOffice,
    public machineStateBean: Machinestate,
    public humanResourceBean: Humanresource,
    public machineryTypeBean: MachineryType
  ){}
}
