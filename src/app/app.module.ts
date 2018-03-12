import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";


import { AppComponent } from "./app.component";
import { ReverseFizzBuzzComponent } from "./reverse-fizz-buzz/reverse-fizz-buzz.component";
import {RouterModule} from "@angular/router";
import {AppRoute} from "./app-routes";
import { CaesarComponent } from './caesar/caesar.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    ReverseFizzBuzzComponent,
    CaesarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(AppRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
