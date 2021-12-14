import { Component, OnInit } from '@angular/core';
import {map} from "rxjs";
import {Member} from "../tree-api.service";
import {FamilyTreeService} from "../family-tree.service";
import {MemberTree} from "../app.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'List of users';
  tree = this.familyTreeService.getTree();

  constructor(
    private familyTreeService: FamilyTreeService
  ) {
  }

  ngOnInit() {
  }

  setCurrentUser(id: number) {
    this.familyTreeService.setCurrentUser(id);
  }
}
