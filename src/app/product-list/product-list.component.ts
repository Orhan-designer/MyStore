import { Component, OnInit } from '@angular/core';
import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products = products;

  share() {
    window.alert('The product has been shared!');
  }
  /* Определите поведение, которое происходит, когда пользователь нажимает кнопку. 
  Родительский компонент ProductListComponent, а не ProductAlertsComponent, действует, когда дочерний элемент вызывает событие. 
  Определите метод onNotify(), аналогичный методу share(). 
  */
  onNotify() {
    window.alert('You will be notified when the product goes on sale')
  }

  constructor() { }

  ngOnInit(): void {
  }

}
