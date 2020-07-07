import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { AdminDashBoardComponent } from './admin/admin-dash-board/admin-dash-board.component';
import {AdminTopicsComponent } from './admin/admin-topics/admin-topics.component';
const routes: Routes = [
  {
    path: 'login',
    component: LoginPageComponent,
  },
  {
    path: 'admin/home',
    component: AdminDashBoardComponent,
  },
  {
    path: 'admin/topics',
    component: AdminTopicsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
