import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Member} from "../tree-api.service";
import {combineLatest, map, Observable} from "rxjs";
import {FamilyTreeService} from "../family-tree.service";
import {MemberTree} from "../app.component";

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss']
})
export class MemberComponent implements OnInit {
  userId = this.route.paramMap.pipe(map((params) => Number(params.get('id'))));
  tree = this.familyTreeService.getTree()
    .pipe(map((tree: Member[]) => {
      return tree;
    }));
  currentUserId: number| null = null;
  user: Observable<MemberTree> = combineLatest([this.userId, this.tree]).pipe(map(([id, tree]) => this.filterByUser(id, tree)));


  constructor(
    private route: ActivatedRoute,
    private familyTreeService:  FamilyTreeService
  ) { }

  ngOnInit(): void {
     this.familyTreeService.currentUser.subscribe((id) => {
       this.currentUserId = id;
     })
  }
  filterByUser(id: number, tree: MemberTree[]): MemberTree {
    return tree.find(el => el.id === id) as MemberTree;
  }

}
