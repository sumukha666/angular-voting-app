import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { AdminDashBoardComponent } from './admin/admin-dash-board/admin-dash-board.component';
import { AdminTopicsComponent } from './admin/admin-topics/admin-topics.component';
import { AdminUsersComponent } from './admin/admin-users/admin-users.component';
import { AuthGuard } from './auth.guard';
const routes: Routes = [
  {
    path: 'login',
    component: LoginPageComponent,
  },
  {
    path: 'admin/home',
    component: AdminDashBoardComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'admin/topics',
    component: AdminTopicsComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'admin/users',
    component: AdminUsersComponent,
    canActivate:[AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
