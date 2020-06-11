import { Component, OnInit } from '@angular/core';
import {Product} from '../../../../../model/product';
import {ProductService} from '../../../../../services/product.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Global} from '../../../../../services/global';
import swal from 'sweetalert';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  public product: Product;
  public pageTitle: string;
  public status: string;
  public btn: string;
  public url: string;

  constructor(public productService: ProductService,
              public route: ActivatedRoute,
              public router: Router
  ) { }

  ngOnInit(): void {
    this.product = new Product(null, '');
    this.pageTitle = 'Editar Persona';
    this.btn = 'Actualizar';
    this.url = Global.url;

    this.getProduct();
  }
  getProduct(){
    this.route.params
      .subscribe(
        params => {
          const code = params.code;
          this.productService.getProduct(code)
            .subscribe(
              response => {
                this.product = response;
              }, error => {
                console.log(error);
              }
            );
        }
      );
  }

  save(){
    swal({
      title: 'Estas seguro que deseas Actualizarlo?',
      text: 'cuidado estas apundo de actualizar un registro',
      icon: 'info',
      buttons: [true, true],
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          swal('Se Actualizo Correctamente', {
            icon: 'success',
          });
          this.productService.updateProduct(this.product.code, this.product)
            .subscribe(response => {
              this.status = 'success';
              this.product = response.product;
              this.router.navigate(['/product']);
          });
        } else {
          swal('Tranquilo/a su registro no se ha Actualizado');
        }
      });
  }

}
