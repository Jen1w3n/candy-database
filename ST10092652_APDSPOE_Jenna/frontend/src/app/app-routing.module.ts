import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./auth/login/login/login.component";
import { CandyCreateComponent } from "./candy/candy-create/candy-create.component";
import { CandyDisplayComponent } from "./candy/candy-display/candy-display.component";

const routes: Routes = [
  {path:'', component:CandyDisplayComponent},
  {path:'add', component:CandyCreateComponent},
  {path:'login', component:LoginComponent},
  {path:'signup', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
