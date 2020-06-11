import { Component, OnInit } from '@angular/core';
import {Product} from '../../../../../model/product';
import {Global} from 'src/app/services/global';
import {ProductService} from '../../../../../services/product.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-product-show-one',
  templateUrl: './product-show-one.component.html',
  styleUrls: ['./product-show-one.component.css']
})
export class ProductShowOneComponent implements OnInit {

  public product: Product;
  public url: string;

  constructor(private productService: ProductService,
              private route: ActivatedRoute,
              private router: Router) {
    this.url = Global.url;
  }

  ngOnInit(): void {
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
}
