import { Component } from '@angular/core';
import { Tea } from '../tea-detail/tea.model'

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
  teasToBuy = [new Tea( "White Peony","white","medium","https://rishi-tea.com/product/image/medium/owp-sana_white-peony-organic-loose-leaf-bai-mu-dan-chinese-white-tea.jpg",1)]

}
