import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from "rxjs/operators"


@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private _http: HttpClient) {

  }

  getResumedBlogs() {
    let headers = new HttpHeaders({
      'Content-Type': "application/json"
    })

    return this._http.get("http://localhost:3000/api/blog/resumed", { headers })
      .pipe(map(res => JSON.parse(JSON.stringify(res))))
  }

  getBlogPage(blogId: any) {
    let headers = new HttpHeaders({
      'Content-Type': "application/json"
    })

    return this._http.get("http://localhost:3000/api/blog/" + blogId, { headers })
      .pipe(map(res => JSON.parse(JSON.stringify(res))))
  }




  sendEmail(form) {
    let params = {
      form: form
    }
    let headers = new HttpHeaders({
      'Content-Type': "application/json"
    })

    return this._http.post("http://localhost:3000/api/mail/sendMail", params, { headers })
      .pipe(map(res => JSON.parse(JSON.stringify(res))))
  }

  sendEmail2(form){
    let params = {
      form: form
    }
    let headers = new HttpHeaders({
      'Content-type': "application/json"
    })
    return this._http.post("http://localhost:3000/api/mail/sendMail2", params, {headers})
    .pipe(map(res=> JSON.parse(JSON.stringify(res))))
  }

  

  
}
