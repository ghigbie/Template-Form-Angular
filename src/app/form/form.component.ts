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
    age: '',
    phone:''
  };
  
  users:object[] = [];
  
  clearData(){
    this.user.name = '';
    this.user.email = '';
    this.user.age = '';
    this.user.phone = '';
  }
  
  
  onSubmit(){
    this.users.push(this.user);
    console.log(this.users);
    this.clearData();
  }
  
  
  constructor(){}
  ngOnInit(){}

}
