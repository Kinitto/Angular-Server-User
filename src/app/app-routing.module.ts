import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './AuthGuard';
import { LoginComponent } from './login/login.component';



const routes: Routes = [

  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },


  { path: 'auth',
  loadChildren: () => import('./auth/auth.module')
  .then(m => m.AuthModule),
  canActivate: [AuthGuard],

},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

