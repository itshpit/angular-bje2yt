import { Component } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;

  addToCart() {
    var slct = document.getElementById("mySelector") as HTMLSelectElement; 
    var mobile = slct.options[slct.selectedIndex].text;
    window.alert(mobile +' is added to your Cart');
  }

  

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

  itemsSelected(counter) {
    window.alert('"counter" items added to your cart');
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/