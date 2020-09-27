import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import {ActivatedRoute, Router} from '@angular/router';
import { ProductService } from './Product.service';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle = 'Product Details';
  product: IProduct[];
  errorMessage: string;
  constructor(private route: ActivatedRoute,
              private router: Router) { }

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
    console.log(id);
  }

}
