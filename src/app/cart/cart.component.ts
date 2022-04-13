import { Component, OnInit } from '@angular/core';
/* импортируйте CartService из cart.service.tsфайла. */
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(
    /* Внедрите, CartService чтобы его CartComponent можно было использовать */
    private cartService: CartService
  ) { }

  /* Определите items свойство для хранения продуктов в корзине. */
  items = this.cartService.getItems();

  ngOnInit(): void {
  }

}
