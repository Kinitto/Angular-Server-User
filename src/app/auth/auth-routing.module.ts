import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../AuthGuard';
import { LoginComponent } from '../login/login.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { HomeComponent } from './pages/home/home.component';
import { EditServerComponent } from './pages/servers/edit-server/edit-server.component';
import { ServerResolver } from './pages/servers/server-resolver.service';
import { ServerComponent } from './pages/servers/server/server.component';
import { ServersComponent } from './pages/servers/servers/servers.component';
import { UserComponent } from './pages/users/user/user.component';
import { UsersComponent } from './pages/users/users/users.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'servers',
    component: ServersComponent,
    children: [
        {  path: ':id/edit', component: EditServerComponent,resolve: { server: ServerResolver }},
        {path: ':id', component: ServerComponent},
        { path: '**', redirectTo: 'login'}
    ],
},
{
  path: 'users',
  component: UsersComponent,
  children: [
      {  path: ':id/:name', component: UserComponent},
      { path: '**', redirectTo: 'login'}
  ],
},
{
  path: 'not-found',
  component: ErrorPageComponent,
  data: {message: 'Ooopsi! Page not found.'}
},
{
  path: '**',
  component: LoginComponent,
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
