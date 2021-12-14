import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {TreeComponent} from "./tree/tree.component";
import {MemberComponent} from "./member/member.component";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'tree/:id', component: TreeComponent },
  { path: 'member/:id', component: MemberComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
