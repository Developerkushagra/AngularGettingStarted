import { Component, OnInit } from '@angular/core';
import {IProduct} from './product';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'pm-Products',
  templateUrl: './Product-list.component.html',
  styleUrls: ['./Product-list.component.css']
})
export class ProductListComponent  implements OnInit {

  pageTitle = 'Product List: No rating is clicked yet';
  imageWidth = 50;
  imageMargin = 2;
  showImage = false;

  filteredProducts: IProduct[];
  _listFilter: string;

  constructor(){
    this.filteredProducts = this.products;
    this._listFilter = 'cart';
  }

  get listFilter(): string{
    return this._listFilter;
  }
  set listFilter(value: string){
    this._listFilter = value;
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }

  // tslint:disable-next-line: typedef
  performFilter(filterby: string){
    filterby = filterby.toLocaleLowerCase();
    return this.products.filter((product: IProduct) =>
    product.productName.toLocaleLowerCase().indexOf(filterby)!==-1);
  }

  onRatingClicked(rating: string): void{
    this.pageTitle = 'Product List: ' + rating;
  }

  products: IProduct[] = [
    {
      "productId": 1,
      "productName": "Leaf Rake",
      "productCode": "GDN-0011",
      "releaseDate": "March 19, 2019",
      "description": "Leaf rake with 48-inch wooden handle.",
      "price": 19.95,
      "starRating": 3.2,
      "imageUrl": "assets/images/leaf_rake.png"
    },
    {
      "productId": 2,
      "productName": "Garden Cart",
      "productCode": "GDN-0023",
      "releaseDate": "March 18, 2019",
      "description": "15 gallon capacity rolling garden cart",
      "price": 32.99,
      "starRating": 4.2,
      "imageUrl": "assets/images/garden_cart.png"
    },
    {
      "productId": 5,
      "productName": "Hammer",
      "productCode": "TBX-0048",
      "releaseDate": "May 21, 2019",
      "description": "Curved claw steel hammer",
      "price": 8.9,
      "starRating": 4.8,
      "imageUrl": "assets/images/hammer.png"
    },
    {
      "productId": 8,
      "productName": "Saw",
      "productCode": "TBX-0022",
      "releaseDate": "May 15, 2019",
      "description": "15-inch steel blade hand saw",
      "price": 11.55,
      "starRating": 3.7,
      "imageUrl": "assets/images/saw.png"
    },
    {
      "productId": 10,
      "productName": "Video Game Controller",
      "productCode": "GMG-0042",
      "releaseDate": "October 15, 2018",
      "description": "Standard two-button video game controller",
      "price": 35.95,
      "starRating": 4.6,
      "imageUrl": "assets/images/xbox-controller.png"
    }
  ];

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {
    console.log('In OnInit');
  }
}
