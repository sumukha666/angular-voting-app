import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginPageComponent } from './login-page/login-page.component';
import { HeaderComponent } from './header/header.component';
import { AdminDashBoardComponent } from './admin/admin-dash-board/admin-dash-board.component';
import { AdminTopicsComponent } from './admin/admin-topics/admin-topics.component';
import { AdminUsersComponent } from './admin/admin-users/admin-users.component';
import { TableComponent } from './common/table/table.component';
import { HttpClientModule } from '@angular/common/http';
import { DialogueComponent } from './common/dialogue/dialogue.component';
import { UserFormComponent } from './admin/user-form/user-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HeaderComponent,
    AdminDashBoardComponent,
    AdminTopicsComponent,
    AdminUsersComponent,
    TableComponent,
    DialogueComponent,
    UserFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
