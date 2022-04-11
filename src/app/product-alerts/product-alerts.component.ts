/* Чтобы настроить ProductAlertsComponent для получения данных о продукте, сначала импортируйте Input из @angular/core. */
/* В product-alerts.component.ts импортируйте Output и EventEmitter из @angular/core. */
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Product } from '../products';

/* Декоратор @Component() указывает, что следующий класс является компонентом. 
@Component() также предоставляет метаданные о компоненте, включая его селектор, шаблоны и стили.
Основные возможности @Component() следующие:
Селектор app-product-alerts идентифицирует компонент. По соглашению селекторы компонентов Angular начинаются с 
префикса app-, за которым следует имя компонента.
Имена файлов шаблонов и стилей ссылаются на HTML и CSS компонента.
Определение @Component() также экспортирует класс ProductAlertsComponent, который обрабатывает функциональные возможности компонента. 
*/
@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {
  /* В определении класса ProductAlertsComponent определите свойство product с декоратором @Input(). 
  Декоратор @Input() указывает, что значение свойства передается от родителя компонента, ProductListComponent. */
  @Input() product: Product | undefined;
  /* В классе компонента определите свойство с именем notify с помощью декоратора @Output() и экземпляра EventEmitter(). 
  Настройка ProductAlertsComponent с помощью @Output() позволяет ProductAlertsComponent генерировать событие 
  при изменении значения свойства уведомления. */
  @Output() notify = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }

}
/* Передать данные родительскому компоненту.
Чтобы кнопка «Уведомить меня» работала, дочерний компонент должен уведомить и передать данные родительскому 
компоненту. Компонент ProductAlertsComponent должен генерировать событие, когда пользователь нажимает «Уведомить меня», 
а компонент ProductListComponent должен реагировать на это событие. 
*/