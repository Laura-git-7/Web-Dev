import {Component} from '@angular/core';
import {ReversePipe} from './reverse.pipe';

@Component({
  selector: 'app-root',
  template: ` Reverse Machine: {{ word | reverse }} `,
  imports: [ReversePipe],
})
export class Tutor23 {
  word = 'You are a champion';
}
