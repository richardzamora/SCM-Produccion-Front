import { Component, OnInit } from '@angular/core';
import {Process} from '../../../../../model/process';
import {ProcessService} from '../../../../../services/process.service';
import {Router} from '@angular/router';
import swal from 'sweetalert';
import {Product} from '../../../../../model/product';
import {ProductService} from '../../../../../services/product.service';

@Component({
  selector: 'app-process-create',
  templateUrl: './process-create.component.html',
  styleUrls: ['./process-create.component.css']
})
export class ProcessCreateComponent implements OnInit {

  public process: Process;
  public listProducts: Product[] = [];
  public pageTitle: string;
  public status: string;
  public btn: string;

  constructor(public processService: ProcessService,
              public productService: ProductService,
              public router: Router
  ) { }

  ngOnInit(): void {
    this.process = new Process(null, '', null, '', null, null);
    this.pageTitle = 'Create Process';
    this.btn = 'Guardar';

    this.getAllProducts();
  }

  getAllProducts(){
    this.productService.getProducts()
      .subscribe(
        response => {
          this.listProducts = response;
        }
      );
  }


  save(): void{
    this.processService.addProcess(this.process)
      .subscribe(
        response => {
          if (this.status = 'success') {
            swal(
              'Proceso creado!!',
              'El proceso ha sido creado correctamente',
              'success'
            );

            location.reload(true);
            this.process = response;
            this.router.navigate(['/process']);
          }
          else {
            this.status = 'error';
            swal(
              'Proceso creado!!',
              'El proceso no se ha creado correctamente :(',
              'error'
            );
          }

          location.reload(true);
        }
      );
  }
}
