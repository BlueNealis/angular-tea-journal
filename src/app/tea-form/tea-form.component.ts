import { Component } from '@angular/core';

@Component({
  selector: 'app-tea-form',
  templateUrl: './tea-form.component.html',
  styleUrls: ['./tea-form.component.css']
})
export class TeaFormComponent {
  name: string ='';
  type: string = '';
  caffeine: string = '';
  imagePath: string = '';
  id: number = 0;
  
  addTea() {

  }
}
