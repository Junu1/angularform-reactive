import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-formvalidation',
  templateUrl: './formvalidation.component.html',
  styleUrls: ['./formvalidation.component.css']
})
export class FormvalidationComponent implements OnInit {
  user={
    firstname: 'Junu',
    lastname: 'Danuwar',
    gender:'female'


  }
  onSubmit(form:NgForm){
  }

  constructor() { }

  ngOnInit(): void {
  
  }

}
