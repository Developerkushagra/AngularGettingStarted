import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import {ActivatedRoute, Router} from '@angular/router';
import { ProductService } from './Product.service';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle = 'Product details required for Product: ';
  product: IProduct;
  errorMessage: string;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private productService: ProductService) { }

  ngOnInit(): void {
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      const id = +param;
      this.getProduct(id);
    }
  }

  onBack(): void{
    this.router.navigate(['/products']);
  }
  getProduct(id: number): void {
    this.productService.getproduct(id).subscribe({
      next: product => this.product = product,
      error: err => this.errorMessage = err
    });
  }

}
