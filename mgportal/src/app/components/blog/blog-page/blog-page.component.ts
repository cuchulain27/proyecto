import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from '../../../services/blog.service';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.css']
})
export class BlogPageComponent implements OnInit {


  public blogId: any;
  public content: any;
  public blogData:any;
  constructor(private _router: ActivatedRoute, private _blogService: BlogService, private sanitizer: DomSanitizer) {

  }

  ngOnInit(): void {
    this._router.params.subscribe(params => {
      if (params["blog"]) {
        this.blogId = params["blog"]
        console.log("BLOGID: ", this.blogId)

        this._blogService.getBlogPage(this.blogId).subscribe(
          response => {
            if (response.success) {
              this.blogData = response.blog;
              this.content = this.sanitizer.bypassSecurityTrustHtml(response.blog.body);
              //this.content = response.blog.body;
            }
          }, error => {
            console.error(error.error.message);
          }
        )
      }
    })
  }

}
