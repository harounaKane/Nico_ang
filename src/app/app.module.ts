import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { UserComponent } from './user/user.component';
import { Routes, RouterModule } from '@angular/router';
import { TrainComponent } from './train/train.component';

// création de route
const routes: Routes = [
  {path: "user", component: UserComponent},
  {path: "home", component: MainComponent},
  {path: "train", component: TrainComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    UserComponent,
    TrainComponent
  ],
  imports: [
    BrowserModule,
    //AppRoutingModule => "devient" = RouterModule
    RouterModule.forRoot(routes),
    // FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
