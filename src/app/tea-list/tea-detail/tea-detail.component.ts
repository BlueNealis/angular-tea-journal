import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tea-detail',
  templateUrl: './tea-detail.component.html',
  styleUrls: ['./tea-detail.component.css']
})
export class TeaDetailComponent {
addToFavorites() {
  console.log("favorited")
}
}
