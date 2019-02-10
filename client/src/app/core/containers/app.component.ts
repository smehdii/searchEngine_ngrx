import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../reducers'


@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
  <bc-layout>
    <bc-toolbar (openMenu)="openSidenav()">
      Book Collection
    </bc-toolbar>
    <router-outlet></router-outlet>
  </bc-layout>
  `
})
export class AppComponent {
  constructor(
    store: Store<fromRoot.State>
  ) { }
}
