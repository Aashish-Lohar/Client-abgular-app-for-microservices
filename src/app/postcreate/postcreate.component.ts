import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import axios from 'axios';
import { Comments } from './comments';
@Component({
  selector: 'app-postcreate',
  templateUrl: './postcreate.component.html',
  styleUrls: ['./postcreate.component.css']
})
export class PostcreateComponent implements OnInit {

  constructor(private http:HttpClient) { }
  response:any;

  ngOnInit(): void {
  }
  async onSubmit(formInput:NgForm){
    console.log(formInput.value)
    // this.http.post<Comments>('http://localhost:4000/posts',{title:formInput.value.input})
    // .subscribe(data=>this.response=data)

    try {
      await axios.post('http://localhost:4000/posts',
      {title:formInput.value.input})
    } catch (error) {
      if(axios.isAxiosError(error)){
        console.log(error)
      }
    }

  }

}
