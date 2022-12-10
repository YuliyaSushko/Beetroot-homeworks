import { ProductsService } from './services/products.service';
import { Component } from '@angular/core';
import { iProduct } from './types/product.types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // test: number = 999;
  productList: iProduct[] = [];     //* створюю змінну, яка приймає в себе тип данних iProduct[] і по дефолту там буде пустий массив
  list: number[] = [];
  inputValue: number =0;

  constructor (private productsService: ProductsService) {}
    loadProductList() {
      // const list = this.productsService.getProductList();
      this.productList = this.productsService.getProductList();     //* і записую цю змінну , що відповідає результату виконання вище
      // console.log('list: ', list);
      
    }

    createNewListItem() {
      this.list.push(this.inputValue);
      this.inputValue = 0;
      // const num = +event.target.value;

      // this.list.push(num);
      // this.inputValue = 0;
      // event.target.value =0;
    }
  
} 
