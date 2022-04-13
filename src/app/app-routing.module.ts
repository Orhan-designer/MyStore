import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component';

const routes: Routes = [
    { path: '', component: ProductListComponent },
    /*Добавьте маршрут для сведений о продукте с путем products/:productId и ProductDetailsComponent для компонента. */
    { path: 'products/:productId', component: ProductDetailsComponent },
    /* Добавьте маршрут для компонента CartComponent с path расширением cart. */
    { path: 'cart', component: CartComponent },
    /* Укажите элемент path и shipping компонент ShippingComponent. */
    { path: 'shipping', component: ShippingComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})

export class AppRoutingModule { }