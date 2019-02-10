import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
  <bc-layout>
    <router-outlet></router-outlet>
  </bc-layout>
  `
})  
export class AppComponent {
  title = 'client';
}
