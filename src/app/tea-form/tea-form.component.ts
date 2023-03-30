import { Component, EventEmitter, Output } from '@angular/core';
import { Tea } from '../tea-detail/tea.model'
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tea-form',
  templateUrl: './tea-form.component.html',
  styleUrls: ['./tea-form.component.css']
})
export class TeaFormComponent {
  id: number = 0;

  @Output() addTea = new EventEmitter<Tea>();

  addNewTea(e: NgForm) {
    console.log('output',e.form.value['name'], e.form.value['type'], e.form.value['caffeine'], e.form.value['imagePath'], 6
    this.addTea.emit(new Tea(e.form.value['name'], e.form.value['type'], e.form.value['caffeine'], e.form.value['imagePath'], 7))
  }
}
