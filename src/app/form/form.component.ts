import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  user = {
    name:'',
    email:'',
    phone:''
  };
  
  users:object[] = [];
  
  onSubmit(){
    this.users.push(this.user);
    console.log(this.users);
  }
  
  constructor(){}
  ngOnInit(){}

}
