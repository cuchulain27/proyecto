import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _blogServices: BlogService) { }

  public mainPost: any;
  public otherPosts = [];

  ngOnInit(): void {

       this._blogServices.getResumedBlogs().subscribe(Response=> {
        if(Response == true){
        this.mainPost = Response.blog[0];
        if(Response.blog.length >0){
          for (let x = 1; x <= Response.blog.length -1; x++){
            this.otherPosts.push(Response.blog[x])
          }
        }
       }
      },   error => {
      console.error(error);
     }
    )
  }

 

}
