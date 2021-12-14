import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

export interface Member {
  "id": number,
  "name": string,
  "born": number,
  "parentId1": number,
  parent1?: Member,
  "parentId2": number,
  parent2?: Member,
  "spouseId"?: number,
  spouse?:  Member,
  "hometown": string
}

@Injectable({
  providedIn: 'root'
})
export class TreeApiService {

  constructor(
    private http: HttpClient) {
  }

  loadTree() {
    return this.http.get<Member[]>('https://therecount.github.io/interview-materials/project-b/people.json');
  }
}
