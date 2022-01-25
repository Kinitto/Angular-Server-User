import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './pages/users/users/users.component';
import { UserComponent } from './pages/users/user/user.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { AuthRoutingModule } from './auth-routing.module';
import { EditServerComponent } from './pages/servers/edit-server/edit-server.component';
import { ServerComponent } from './pages/servers/server/server.component';
import { ServersComponent } from './pages/servers/servers/servers.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UsersComponent,
    UserComponent,
    ServersComponent,
    EditServerComponent,
    ServerComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    AuthRoutingModule,
    FormsModule
  ],
  exports:[
    ServersComponent,
    EditServerComponent,
    ServerComponent
  ]
})
export class AuthModule { }
