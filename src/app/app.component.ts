import {Component, OnInit} from '@angular/core';
import {FamilyTreeService} from "./family-tree.service";
import {map} from "rxjs";
import {Member} from "./tree-api.service";

export interface MemberTree extends Member{
  relatives?: MemberTree[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title = 'assessment';
}
