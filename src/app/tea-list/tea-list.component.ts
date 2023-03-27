import { Component, OnInit } from '@angular/core';
import { Tea } from '../tea-detail/tea.model';
import { TeaDataService } from '../services/teaData.service';

@Component({
  selector: 'app-tea-list',
  templateUrl: './tea-list.component.html',
  styleUrls: ['./tea-list.component.css'],
})
export class TeaListComponent implements OnInit{
favorites = false;   
teas: Tea[] = []

constructor(private teaService: TeaDataService) {

}
ngOnInit() {
  this.teas = this.teaService.teas;
}

}
