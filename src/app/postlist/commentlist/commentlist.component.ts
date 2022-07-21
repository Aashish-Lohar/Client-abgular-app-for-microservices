import { Component, Input, OnInit } from '@angular/core';
import axios from 'axios';
@Component({
  selector: 'app-commentlist',
  templateUrl: './commentlist.component.html',
  styleUrls: ['./commentlist.component.css']
})
export class CommentlistComponent implements OnInit {
  // @Input() comment!:string;
  @Input() comments!:any[];
  // comments!:any[]
  constructor() { }

  ngOnInit(): void {
    // this.fetchComments();
  }
  
  // async fetchComments(){
  //   const res=await axios.get(`http://localhost:4001/posts/${this.id}/comments`);
  //   this.comments=res.data;
  //   console.log("in comment list",this.comments)
  // }

}
