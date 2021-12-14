import { Injectable } from '@angular/core';
import {BehaviorSubject, map, Observable, switchMap, tap} from "rxjs";
import {Member, TreeApiService} from "./tree-api.service";

@Injectable({
  providedIn: 'root'
})
export class FamilyTreeService {
  private tree = new BehaviorSubject<Member[]>(
    []
  );
  currentUser = new BehaviorSubject<number | null>(null);

  constructor(
    private treeApiServise: TreeApiService
  ) { }

  getTree(): Observable<Member[]> {
    if (this.tree.value.length) {
      return this.tree;
    }
    return this.treeApiServise.loadTree()
      .pipe(tap((tree) => {
        this.tree.next(this.modifyTree(tree));
          console.log(tree);
        }),
        switchMap(() => this.tree));
  }

  modifyTree(tree: Member[]): Member[] {
    tree.forEach(el => {
      el.spouse  = tree.find(i => i.id === el.spouseId);
      el.parent1  = tree.find(i => i.id === el.parentId1);
      el.parent2  = tree.find(i => i.id === el.parentId2);
    })
    return tree;
  }

  setCurrentUser(id: number) {
    this.currentUser.next(id);
  }
}
