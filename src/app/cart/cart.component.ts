import { Component, OnInit } from '@angular/core';
/* импортируйте CartService из cart.service.tsфайла. */
import { CartService } from '../cart.service';
/* Импортируйте FormBuilder сервис из @angular/forms пакета.  */
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(
    /* Внедрите, CartService чтобы его CartComponent можно было использовать */
    private cartService: CartService,
    /* Внедрить FormBuilder сервис в CartComponent */
    private fb: FormBuilder
  ) { }

  /* Определите items свойство для хранения продуктов в корзине. */
  items = this.cartService.getItems();

  checkoutForm = this.fb.group({
    name: '',
    address: ''
  });

  /* Определите onSubmit() метод для обработки формы. 
  Этот метод позволяет пользователям отправлять свое имя и адрес. 
  Кроме того, этот метод использует clearCart() метод CartService для 
  сброса формы и очистки корзины. 
  */
  onSubmit(): void {
    this.items = this.cartService.clearCart();
    console.warn('Your order has been submitted',
      this.checkoutForm.value);
    this.checkoutForm.reset()
  }

  ngOnInit(): void {
  }

}
