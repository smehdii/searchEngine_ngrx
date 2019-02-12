import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-rooting.module';
import { StoreModule } from '@ngrx/store';
import { reducers } from './reducers';
import { LoginFormComponent } from './components/login-form.component';
import { LoginPageComponent } from './containers/login-page.component';
import { LogoutConfirmationDialogComponent } from './components/logout-confirmation-dialog.component';
import { AuthEffects } from './effects/auth.effects';
import { EffectsModule } from '@ngrx/effects';
import { MaterialModule } from '../material';
import { ReactiveFormsModule } from '@angular/forms';

export const COMPONENTS = [
  LoginFormComponent,
  LoginPageComponent,
  LogoutConfirmationDialogComponent
]

@NgModule({
  declarations: [
    COMPONENTS
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([AuthEffects])
  ],
  entryComponents: [LogoutConfirmationDialogComponent],
})
export class AuthModule { }
