import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { UserComponent } from './user/user.component';

// création de route
const routes: Routes = [
  {path: "user", component: UserComponent},
  {path: "home", component: MainComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    //AppRoutingModule => "devient" = RouterModule
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
