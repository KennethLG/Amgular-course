import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule, Route } from "@angular/router";

import { AppComponent } from './app.component';
import { SecondComponent } from './second/second.component';
import { UserComponent } from './user/user.component';

import { DataService } from "./data.service";
import { AboutComponent } from './about/about.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';

const routes: Route[] = [
  {path: "", component: HelloWorldComponent},
  {path: "about", component: AboutComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    SecondComponent,
    UserComponent,
    AboutComponent,
    HelloWorldComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),

  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
