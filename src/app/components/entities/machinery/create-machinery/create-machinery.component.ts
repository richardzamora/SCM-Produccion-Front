import { Component, OnInit } from '@angular/core';
import {Machinery} from '../../../../model/machinery';
import {Router} from '@angular/router';
import {HumanResourcesService} from '../../../../services/human-resources.service';
import {MachineryService} from '../../../../services/machinery.service';
import swal from 'sweetalert';
import {WorkShift} from '../../../../model/workShift';
import {Humanresource} from '../../../../model/humanresource';
import {BranchOffice} from '../../../../model/branchOffice';
import {StateBranchOffice} from '../../../../model/stateBranchOffice';
import {Machinestate} from '../../../../model/machinestate';
import {MachineryType} from '../../../../model/machineryType';
import {BranchofficeService} from '../../../../services/branchoffice.services';
import {MachinestateService} from '../../../../services/machinestate.services';
import {MachineryTypesService} from '../../../../services/machinery-types.service';

@Component({
  selector: 'app-create-machinery',
  templateUrl: './create-machinery.component.html',
  styleUrls: ['./create-machinery.component.css']
})
export class CreateMachineryComponent implements OnInit {

  public machinery: Machinery;

  public branchOffices: BranchOffice[];
  public machineStates: Machinestate[];
  public humanresources: Humanresource[];
  public machineryTypes: MachineryType[];

  public pageTitle: string;
  public status: string;
  public btn: string;
  constructor(
    private router: Router,
    private machineryService: MachineryService,

    private branchofficeService: BranchofficeService,
    private machinestateService: MachinestateService,
    private humanResourcesService: HumanResourcesService,
    private machineryTypesService: MachineryTypesService
  ) {
    this.machinery = new Machinery( null, '', '', '',
      new BranchOffice( null, '', '', new StateBranchOffice( null, '')),
      new Machinestate( null, ''),
      new Humanresource( null, '', '', new WorkShift( null, '')),
      new MachineryType( null, ''));
    this.pageTitle = 'Añadir Maquinaria';
    this.btn = 'Guardar';
  }

  ngOnInit(): void {
    this.branchofficeService.getBranchoffices().subscribe(response => {
      this.branchOffices = response;
    });
    this.machinestateService.getMachineStates().subscribe(response => {
      this.machineStates = response;
    });
    this.humanResourcesService.getAll().subscribe(response => {
      this.humanresources = response;
    });
    this.machineryTypesService.getAll().subscribe(response => {
      this.machineryTypes = response;
    });
  }
  save(){
    this.machineryService.add(this.machinery).subscribe(response => {
      if (this.status === 'success'){
        swal(
          'Maquinaria creada!!',
          'El Maquinaria se ha creado correctamente',
          'success'
        );
        location.reload(true);
        this.machinery = response.machinery;
        this.router.navigate(['/machinery']);
      }else{
        this.status = 'error';
        swal(
          'Maquinaria creada!!',
          'El Maquinaria no se ha creado correctamente :(',
          'error'
        );
      }location.reload(true);
    });
  }

}
