import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material';
import { RouterModule } from '@angular/router';
import { AppComponent } from './containers/app.component';
import { LayoutComponent } from './components/layout.components';
import { NavItemComponent } from './components/nav-item.component';
import { SidenavComponent } from './components/sidenav.component';
import { ToolbarComponent } from './components/toolbar.component';
import { NotFoundPageComponent } from './containers/not-found-page.component';


export const COMPONENTS = [
  AppComponent,
  NotFoundPageComponent,
  LayoutComponent,
  NavItemComponent,
  SidenavComponent,
  ToolbarComponent,
];


@NgModule({
  declarations: COMPONENTS,
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ]
})
export class CoreModule { }
