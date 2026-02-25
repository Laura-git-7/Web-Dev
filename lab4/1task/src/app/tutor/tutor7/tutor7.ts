import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <section (mouseover)="showSecretMessage()">
      There's a secret message for you, hover to reveal 👀
      {{ message }}
    </section>
  `,
})
export class Tutor7 {
  message = '';

  showSecretMessage() {
    this.message = 'Way to go 🚀';
  }
}
