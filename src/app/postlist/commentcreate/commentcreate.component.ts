import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import axios from 'axios';
@Component({
  selector: 'app-commentcreate',
  templateUrl: './commentcreate.component.html',
  styleUrls: ['./commentcreate.component.css']
})
export class CommentcreateComponent implements OnInit {
  @Input() id!:string;
  constructor() { }

  ngOnInit(): void {
  }
  async onSubmit(commentInput:NgForm){
    await axios.post(`http://localhost:4001/posts/${this.id}/comments`,{
      content:commentInput.value.input
    })
    commentInput.reset()
  }

}
