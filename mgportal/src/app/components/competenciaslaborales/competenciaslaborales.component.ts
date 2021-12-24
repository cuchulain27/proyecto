import { FormBuilder, Validators } from '@angular/forms';
import { MessageI } from './../../models/messages';
import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BlogService } from 'src/app/services/blog.service';


@Component({
  selector: 'app-competenciaslaborales',
  templateUrl: './competenciaslaborales.component.html',
  styleUrls: ['./competenciaslaborales.component.css']
})
export class CompetenciaslaboralesComponent implements OnInit {
  public formSumit = false;
  public message = undefined;

  

  public form = {
    user: {
      name: undefined,
      mail: undefined,
      empresa: undefined,
      area: undefined,
      charge: undefined,
      industria: undefined,
      trabajadores: undefined,
      phone: undefined,
    },
    interest: [],
    
    

  }

   

  constructor(private fb: FormBuilder, private modal:NgbModal, private _blogservice: BlogService) { 
        
    
       
    
  }

  ngOnInit(): void {


  }


  

  open(contenido: any){
    this.modal.open(contenido,{centered: true});
  }

  changeStatus(value, event){
    let exists = false;
    this.form.interest.forEach((element, index) =>{
    if(element == value){
      exists = true;
      this.form.interest.splice(index,1);

    }  
    
  })

  if(!exists){
    this.form.interest.push(value)
  }

}

 sendmail2(){
   this._blogservice.sendEmail2(this.form).subscribe(response => {
     if(response.success){
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
      || this.form.interest.length == 0 ) {
      flag = true;
    }
    return flag;
  }

  


  

 








}
