import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Result } from 'express-validator';
import { BlogService } from '../../services/blog.service';


@Component({
  selector: 'app-contacto2',
  templateUrl: './contacto2.component.html',
  styleUrls: ['./contacto2.component.css']
})
export class Contacto2Component implements OnInit {

  public formSumit = false;
  public message = undefined;

  public form = {
    user: {
      name: undefined,
      mail: undefined,
      phone: undefined,
      charge: undefined
    },
    interest: [],
    message: undefined

  }

  // tslint:disable-next-line: max-line-length



  

  constructor(private fb: FormBuilder, private _blogService: BlogService) { }

  ngOnInit(): void {
  }



  changeStatus(value, event) {
    let exists = false;
    this.form.interest.forEach((element, index) => {
      if (element == value) {
        exists = true;
        this.form.interest.splice(index, 1);
      }
    })

    if (!exists) {
      this.form.interest.push(value)
    }

  }
  sendMail() {
    this._blogService.sendEmail(this.form).subscribe(response => {
      if (response.success) {
        this.message = response.message;
      }
    }, error => {
      console.error(error);
    })
  }


  validateData() {
    let flag = false;

    if (this.form.user.name == "" || this.form.user.name == undefined || this.form.user.charge == "" || this.form.user.charge == undefined
      || this.form.user.mail == "" || this.form.user.mail == undefined || this.form.user.phone == "" || this.form.user.phone == undefined
      || this.form.interest.length == 0 || this.form.message == "" || this.form.message == undefined) {
      flag = true;
    }
    return flag;
  }

}
