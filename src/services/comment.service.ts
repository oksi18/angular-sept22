import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IComment} from "../interfaces/comment.interface";
import {urls} from "../constants";

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private httpClient: HttpClient) { }

  getCommentByPostId(id: number): Observable<IComment[]>{
    return this.httpClient.get<IComment[]>(urls.comments)
  }
}
