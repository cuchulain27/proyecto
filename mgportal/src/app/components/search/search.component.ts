import { SearchService } from './../../services/search.service';
import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  blogs: any;

  constructor(private _userService: SearchService, private _blogService: BlogService  ) { }

  ngOnInit(): void {
  }

  public criteria = "";

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
