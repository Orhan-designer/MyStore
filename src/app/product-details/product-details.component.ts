import { Component, OnInit } from '@angular/core';
/* Импортируйте ActivatedRoute из @angular/router и массив продуктов из ../products. */
import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../products';
/* импортируйте службу корзины. */
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  /* Определите свойство продукта. */
  product: Product | undefined;

  /* Определите addToCart() метод, который добавляет текущий товар в корзину. */
  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('You product has been added to the cart!');
  }

  /* Внедрите ActivatedRoute в конструктор(), добавив частный маршрут: ActivatedRoute в качестве аргумента в скобках конструктора. */
  /* Внедрите сервис корзины, добавив его в файл constructor(). */
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) { }

  /* В методе ngOnInit() извлеките productId из параметров маршрута и найдите соответствующий продукт в массиве продуктов. */
  ngOnInit(): void {
    // Сначала получаем идентификатор продукта из текущего маршрута.
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    // Найдите продукт, который соответствует идентификатору, указанному в маршруте.
    this.product = products.find(product => product.id === productIdFromRoute);
  }

}
