import { Component, EventEmitter, Output } from '@angular/core';
import { Tea } from '../tea-detail/tea.model'

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

  @Output() addTea = new EventEmitter<Tea>();

  addNewTea(e: any) {
    e.preventDefault
    this.addTea.emit(new Tea(this.name, this.type, this.caffeine, this.imagePath, Math.random()))
  }
}
