import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent implements OnInit {

  form:FormGroup;

  constructor(private formBuilder:FormBuilder) {
    this.form = this.formBuilder.group({
      email:['',[Validators.required, Validators.email]],
      password:['',[Validators.required, Validators.minLength(8)]],
      devicedId:["17867868768"],
      deviceType:["DEVICE_TYPE_ANDROID"],
      notificationToken:["67657575eececc34"]
    })
   }

  ngOnInit(): void {
    
  }

  get Email (){
    return this.form.get('email');
  }

  get Password (){
    return this.form.get('password');
  }

}
