import { Component } from '@angular/core';
import { product } from './models/product';
import { ProductService } from './services/product.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'product.UI';
  product : product[] = [];

  constructor(private ProductService: ProductService){}

ngOnInit():void {
this.ProductService
.getProducts()
.subscribe((result: product[]) => (this.product = result));


}

}
