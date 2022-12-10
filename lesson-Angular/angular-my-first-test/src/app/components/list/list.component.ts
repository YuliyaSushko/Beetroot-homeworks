// import { ProductsService } from 'src/app/services/products.service';
import { Component, Input} from '@angular/core';
import { iProduct } from 'src/app/types/product.types';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  // providers: [ProductsService],
})
export class ListComponent  {
  @Input() productList: iProduct[] = []; 
}
