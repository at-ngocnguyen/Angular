import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditContentPipe } from './share/pipe/edit-content.pipe';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { ReactiveComponent } from './component/form/reactive_form/reactive/reactive.component';
import { TemplateComponent } from './component/form/template_form/template/template.component';
import { HomeComponent } from './component/page/home/home.component';
import { NewsComponent } from './component/page/news/news.component';
import { LoginComponent } from './component/page/login/login.component';
import { UserComponent } from './component/user/user.component';
import { DashboardComponent } from './component/user/dashboard/dashboard.component';
import { ProfileComponent } from './component/user/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    EditContentPipe,
    HeaderComponent,
    FooterComponent,
    ReactiveComponent,
    TemplateComponent,
    HomeComponent,
    NewsComponent,
    LoginComponent,
    UserComponent,
    DashboardComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
