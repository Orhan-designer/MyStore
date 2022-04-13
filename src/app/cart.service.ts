import { Injectable } from '@angular/core';
/* Импортируйте Product интерфейс из ./products.tsв cart.service.ts файл */
import { Product } from './products';
/* импорт HttpClient из пакета @angular/common/http */
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor(
    /* Внедрить HttpClient в CartService constructor(). */
    private httpClient: HttpClient
  ) { }

  /* Определите новый getShippingPrices() метод, который использует этот HttpClient get() метод. */
  getShippingPrices() {
    return this.httpClient.get<{ type: string, price: number }[]>
      ('/assets/shipping.json');
  }

  /* определите items свойство для хранения массива текущих товаров в корзине. */
  items: Product[] = [];

  /* Метод addToCart() добавляет продукт в массив items */
  addToCart(product: Product) {
    this.items.push(product);
  }

  /* Метод getItems() собирает товары, которые пользователи добавляют в корзину, и возвращает каждый товар с соответствующим количеством . */
  getItems() {
    return this.items;
  }

  /* Метод clearCart() возвращает пустой массив товаров, который очищает корзину. */
  clearCart() {
    this.items = [];
    return this.items;
  }

}
