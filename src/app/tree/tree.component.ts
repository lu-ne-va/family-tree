import { Component, OnInit } from '@angular/core';
import {combineLatest, map, Observable} from "rxjs";
import {Member} from "../tree-api.service";
import {FamilyTreeService} from "../family-tree.service";
import {MemberTree} from "../app.component";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent implements OnInit {
  userId = this.route.paramMap.pipe(map((params) => Number(params.get('id'))));
  title = 'assessment';
  tree = this.familyTreeService.getTree()
    .pipe(map((tree: Member[]) => {
      return tree;
    }));
  userTree: Observable<MemberTree> = combineLatest([this.userId, this.tree]).pipe(map(([id, tree]) => this.filterByUser(id, tree)));
  fields: Partial<Array<keyof Member>> = ['parent1', 'parent2', 'spouse'];

  constructor(
    private familyTreeService: FamilyTreeService,
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit() {

  }

  filterByUser(id: number, tree: MemberTree[]): MemberTree {
    return tree.find(el => el.id === id) as MemberTree;
  }
}
