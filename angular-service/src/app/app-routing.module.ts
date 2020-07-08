import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { AdminDashBoardComponent } from './admin/admin-dash-board/admin-dash-board.component';
import { AdminTopicsComponent } from './admin/admin-topics/admin-topics.component';
import { AdminUsersComponent } from './admin/admin-users/admin-users.component';
import { UserDashboardComponent } from './user/user-dashboard/user-dashboard.component';
import { UserTopicsComponent } from "./user/user-topics/user-topics.component"
import { AuthGuard } from './auth.guard';
import {UserAuthGuard} from "./user-auth.guard"
const routes: Routes = [
  {
    path: 'login',
    component: LoginPageComponent,
  },
  {
    path: 'admin/home',
    component: AdminDashBoardComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'admin/topics',
    component: AdminTopicsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'admin/users',
    component: AdminUsersComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'user/home',
    component: UserDashboardComponent,
    canActivate:[UserAuthGuard],
  },
  {
    path: 'user/topics',
    component: UserTopicsComponent,
    canActivate:[UserAuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
