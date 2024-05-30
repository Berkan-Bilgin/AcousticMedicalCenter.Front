import { Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';

export const authRoutes: Routes = [
  {
    path: 'auth/login',
    component: LoginPageComponent,
  },
  {
    path: 'auth/signup',
    component: SignupPageComponent,
  },
];
