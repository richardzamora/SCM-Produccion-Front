import { Component, OnInit } from '@angular/core';
import {Machinery} from '../../../../model/machinery';
import {ActivatedRoute, Router} from '@angular/router';
import {MachineryService} from '../../../../services/machinery.service';
import {Global} from '../../../../services/global';
import swal from 'sweetalert';

import {WorkShift} from '../../../../model/workShift';
import {Humanresource} from '../../../../model/humanresource';
import {HumanResourcesService} from '../../../../services/human-resources.service';
import {BranchOffice} from '../../../../model/branchOffice';
import {StateBranchOffice} from '../../../../model/stateBranchOffice';
import {Machinestate} from '../../../../model/machinestate';
import {MachineryType} from '../../../../model/machineryType';
import {BranchofficeService} from '../../../../services/branchoffice.services';
import {MachinestateService} from '../../../../services/machinestate.services';
import {MachineryTypesService} from '../../../../services/machinery-types.service';

@Component({
  selector: 'app-edit-machinery',
  templateUrl: './edit-machinery.component.html',
  styleUrls: ['./edit-machinery.component.css']
})
export class EditMachineryComponent implements OnInit {

  public status: string;

  public machinery: Machinery;

  public branchOffices: BranchOffice[];
  public machinestates: Machinestate[];
  public humanresources: Humanresource[];
  public machineryTypes: MachineryType[];

  public pageTitle: string;
  public btn: string;
  public url: string;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
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
    this.pageTitle = 'Editar Maquinaria';
    this.btn = 'Actualizar';
    this.url = Global.url;
  }

  ngOnInit(): void {
    this.branchofficeService.getBranchoffices().subscribe(response => {
      this.branchOffices = response;
    });
    this.machinestateService.getMachineStates().subscribe(response => {
      this.machinestates = response;
    });
    this.humanResourcesService.getAll().subscribe(response => {
      this.humanresources = response;
    });
    this.machineryTypesService.getAll().subscribe(response => {
      this.machineryTypes = response;
    });
    this.getValues();
  }
  save(){
    swal({
      title: 'Estas seguro que deseas Actualizarlo?',
      text: 'cuidado estas apunto de actualizar un registro',
      icon: 'info',
      buttons: [true, true],
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          swal('Se Actualizo Correctamente', {
            icon: 'success',
          });
          this.machineryService.update(this.machinery.code, this.machinery).subscribe(response => {
            this.status = 'success';
            this.machinery = response.machinery;
            this.router.navigate(['/machinery']);
          });
        } else {
          swal('Tranquilo/a su registro no se ha Actualizado');
        }
      });
  }
  getValues(){
    this.route.params.subscribe(params => {
      const code = params.code;
      this.machineryService.getOne(code).subscribe(
        response => {
          this.machinery = response;
        }, error => {
          console.log(error);

        }
      );
    });
  }

}
