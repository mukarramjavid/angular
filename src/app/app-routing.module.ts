import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { ListComponent } from "./list/list.component";
const routes: Routes = [
  {path:  "", pathMatch:  "full",component: HomeComponent},
  // {path: "home", pathMatch:  "full",component: HomeComponent},
  {path: "about",pathMatch:  "full", component: AboutComponent},
  {path: "contact",pathMatch:  "full", component: ContactComponent},
  {path: "list",pathMatch:  "full", component: ListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
