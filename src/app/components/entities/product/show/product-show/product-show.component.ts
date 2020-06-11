import {Component, OnInit} from '@angular/core';
import {Product} from '../../../../../model/product';
import {ProductService} from '../../../../../services/product.service';
import {ActivatedRoute, Router} from '@angular/router';
import swal from 'sweetalert';

@Component({
  selector: 'app-product-show',
  templateUrl: './product-show.component.html',
  styleUrls: ['./product-show.component.css']
})
export class ProductShowComponent implements OnInit {

  public products: Product[] = [];

  constructor(private productService: ProductService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.productService.getProducts()
      .subscribe(
        response => {
          this.products = response;
        }
      );
  }

  deleteProduct(code) {
    // @ts-ignore
    swal(
      {
        title: '¿Estás seguro que deseas eliminarlo?',
        text: 'Cudado estás apunto de eliminar un registro',
        icon: 'warning',
        buttons: [true, true],
        dangerMode: true
      }
    ).then((willDelete) => {
      if (willDelete) {
        swal('Poof! su registro ha sido eliminado', {
          icon: 'success',
        });

        this.productService.deleteProduct(code)
          .subscribe(
            response => {
              this.ngOnInit();
            }
          );
      }
      else {
        swal('Tranquilo/a su registro no se ha borrado');
      }
    });
  }
}
