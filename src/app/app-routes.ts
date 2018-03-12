import {Routes} from "@angular/router";
import {ReverseFizzBuzzComponent} from "./reverse-fizz-buzz/reverse-fizz-buzz.component";
import {CaesarComponent} from "./caesar/caesar.component";
export const AppRoute: Routes = [
  {path: "", component: ReverseFizzBuzzComponent},
  {path: "caesar", component: CaesarComponent},
  {path: "**", component: ReverseFizzBuzzComponent}
];
