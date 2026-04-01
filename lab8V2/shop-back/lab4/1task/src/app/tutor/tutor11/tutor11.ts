import {Component} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-user',
  //providers: [provideImgixLoader('https://my.base.url?')],
  template: `
    <p>Username: {{ username }}</p>
    <p>Preferred Framework:</p>
    <ul>
      <li>
        Static Image:
        <img ngSrc="/logo.svg" alt="Angular logo" />
      </li>
      <li>
        Dynamic Image:
        <img [ngSrc]="logoUrl" [alt]="logoAlt" />
      </li>
    </ul>
  <div class="image-container">
    <img ngSrc="www.example.com/image.png" height="600" width="800" priority />
  </div>
  `,
  imports: [NgOptimizedImage],
})
export class Tutor11 {
  logoUrl = '/logo.svg';
  logoAlt = 'Angular logo';
  username = 'youngTech';
}
