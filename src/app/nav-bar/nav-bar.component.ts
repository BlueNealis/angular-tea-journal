import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
 @Output() featureSelected = new EventEmitter<string>();
  onSelection(feature: string) {
    this.featureSelected.emit(feature)
  }
}
