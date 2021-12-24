import { SearchService } from './../../services/search.service';
import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../services/blog.service';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  blogs = []
  
  

  constructor(private _blogService: BlogService,private _userService: SearchService) { }

  public mainPost: any;
  public otherPosts: any = [];
  public criteria = "";
  ngOnInit(): void {

    



    this._blogService.getResumedBlogs().subscribe(
      response => {
        if (response.success == true) {
          this.mainPost = response.blogs[0];
          if (response.blogs.length > 0) {
            for (let x = 1; x <= response.blogs.length - 1; x++) {
              this.otherPosts.push(response.blogs[x])
            }
          }

        }
      }, error => {
        console.error(error);
      }
    )
  }

 // buscador
 
  get_page() {
      this._userService.find_page(this.criteria).subscribe(
          response => {
              if (response.success) {
                  this.blogs = response.blogs;
              } else {
                  this.blogs = [];
              }
  
          }, error => {
              console.error('error: ', error);
          }
      )
  }
  
    
    


  






}
