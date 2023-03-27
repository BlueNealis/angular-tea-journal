import { Component } from '@angular/core';
import { Tea } from './tea-detail/tea.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tea-journal-angular';
  loadedFeature = 'teas';
  newTea: Tea = new Tea('','','','',0);

  addNewTea(tea: Tea) {
    this.newTea = tea;
  }
  onNavigate(feature: string) {
    this.loadedFeature = feature; 
  }
}
