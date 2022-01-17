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
import { UserComponent } from './users/user/user.component';
import { UsersComponent } from './users/users/users.component';

const routes: Routes = [
  {
    path: 'users', component: UsersComponent, children: [
      { path: ':id/:name', component: UserComponent },
    ]
  },
  { path: '', component: HomeComponent },
  {
     path: 'servers', canActivateChild: [AuthGuard], component: ServersComponent, children: [
      { path: ':id/edit', component: EditServerComponent, canDeactivate: [CanDeactivateGuard],resolve: { server: ServerResolver } },
      { path: ':id', //canActivate:[AuthGuard],
      component: ServerComponent }

    ]
  },

  { path: 'login', component: LoginComponent, pathMatch: "full" },

  { path: 'not-found', component: ErrorPageComponent, data: {message: 'Ooopsi! Page not found.'} },
  { path: '**', redirectTo: '/not-found' },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

