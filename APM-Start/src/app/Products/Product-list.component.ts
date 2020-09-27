import { Component, OnInit } from '@angular/core';
import {IProduct} from './product';
import {ProductService} from './Product.service';
@Component({
  // tslint:disable-next-line: component-selector
  selector: 'pm-Products',
  templateUrl: './Product-list.component.html',
  styleUrls: ['./Product-list.component.css']
})
export class ProductListComponent  implements OnInit {

  constructor(private productService: ProductService){}
  _listFilter: string;
  get listFilter(): string{
    return this._listFilter;
  }
  set listFilter(value: string){
    this._listFilter = value;
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }

  pageTitle = 'Product List: No rating is clicked yet';
  imageWidth = 50;
  imageMargin = 2;
  showImage = false;
  errorMessage: string;

  filteredProducts: IProduct[];

  products: IProduct[];

  // tslint:disable-next-line: typedef
  performFilter(filterby: string){
    filterby = filterby.toLocaleLowerCase();
    return this.products.filter((product: IProduct) =>
    product.productName.toLocaleLowerCase().indexOf(filterby)!==-1);
  }

  onRatingClicked(rating: string): void{
    this.pageTitle = 'Product List: ' + rating;
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {
    this.productService.getProduct().subscribe({
      next: products => {
        this.products = products;
        this.filteredProducts = this.products;
      },
      error: err => this.errorMessage = err
    });
    
  }
}
