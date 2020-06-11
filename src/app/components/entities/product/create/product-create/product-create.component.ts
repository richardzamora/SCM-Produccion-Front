import { Component, OnInit } from '@angular/core';
import {Product} from '../../../../../model/product';
import {ProductService} from '../../../../../services/product.service';
import {Router} from '@angular/router';
import swal from 'sweetalert';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  public product: Product;
  public pageTitle: string;
  public status: string;
  public btn: string;

  constructor(public productService: ProductService,
              public router: Router
  ) { }

  ngOnInit(): void {
    this.product = new Product(null, '');
    this.pageTitle = 'Crear Product';
    this.btn = 'Guardar';
  }

  save(): void{
    this.productService.addProduct(this.product)
      .subscribe(
        response => {
          if (this.status = 'success') {
            swal(
              'Producto creado!!',
              'El producto ha sido creado correctamente',
              'success'
            );

            location.reload(true);
            this.product = response;
            this.router.navigate(['/product']);
          }
          else {
            this.status = 'error';
            swal(
              'Producto creado!!',
              'El producto no se ha creado correctamente :(',
              'error'
            );
          }

          location.reload(true);
        }
      );
  }
}
