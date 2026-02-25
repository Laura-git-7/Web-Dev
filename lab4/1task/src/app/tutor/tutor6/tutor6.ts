import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['tutor6.css'],
  template: ` <div [contentEditable]="isEditable"></div> `,
})
export class Tutor6 {
  isEditable = true;
}
