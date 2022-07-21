import { Component, OnInit } from '@angular/core';
import axios from 'axios';
@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.css']
})
export class PostlistComponent implements OnInit {

  constructor() { }
  post={}
  renderedPosts!:any[];
  ngOnInit(): void {
    this.fetchPosts()
  }
  
  async fetchPosts(){
    // const res=await axios.get('http://localhost:4000/posts');
    const res=await axios.get('http://localhost:4002/posts');
    this.post=res.data;
    console.log("after changing to 4002",this.post)
    this.renderedPosts=Object.values(this.post)
    console.log("hellooooo",this.post)
  }

}
