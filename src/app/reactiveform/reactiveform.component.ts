import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators,FormBuilder } from '@angular/forms';
import { Country } from '../country';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {
  countries: Country[] = [
    new Country(1, 'Nepal'),
    new Country(2, 'USA'),
    new Country(3, 'Canada'),
    new Country(4, 'Australia')
  ];
  contactForm: FormGroup = this.fb.group({
    name: [
      'Junu Danuwar',
      Validators.required,
      Validators.minLength(3)
    ],
    email: [
      Validators.required,
      Validators.email
    ],
    mobilenumber: [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(10)
    ],
    countryId:[
      '',
      Validators.required

    ],
    message: [
      Validators.required
    ]
  }
  )
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  
  onSave() {
    console.log(this.contactForm.value);
  }

  get f() {
    return this.contactForm.controls;
  }

}
