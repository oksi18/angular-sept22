import {Component, Input, OnInit} from '@angular/core';
import {IComment} from "../../../interfaces/comment.interface";
import {CommentService} from "../../../services";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit{
  @Input()
  comments: IComment[]
  postId: number

  constructor(private commentService: CommentService ) {
  }

  ngOnInit(): void {
    this.commentService.getCommentByPostId(this.postId).subscribe(value => this.comments = value)
  }

}
