import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './AuthGuard';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CanDeactivateGuard } from './servers/edit-server/can-deactivate.service';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerResolver } from './servers/server-resolver.service';
import { ServerComponent } from './servers/server/server.component';
import { ServersComponent } from './servers/servers/servers.component';


const routes: Routes = [

  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },

  {
    path: 'users',
    loadChildren: () => import('./users/users.module')
    .then(m => m.UsersModule)
  },
  {

  },
  {
    path: 'servers', canActivate: [AuthGuard], component: ServersComponent, children: [
     { path: ':id/edit', component: EditServerComponent,resolve: { server: ServerResolver } },
     { path: ':id', //canActivate:[AuthGuard],
     component: ServerComponent }

   ]
 },

  { path: 'home', component: HomeComponent,canActivate: [AuthGuard]},

  { path: 'not-found', component: ErrorPageComponent, data: {message: 'Ooopsi! Page not found.'} },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

