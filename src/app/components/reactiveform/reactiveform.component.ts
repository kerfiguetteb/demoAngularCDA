import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  imports: [ReactiveFormsModule],
  templateUrl: './reactiveform.component.html',
  styleUrl: './reactiveform.component.css'
})
export class ReactiveFormComponent {

  formBuilder = inject(FormBuilder)

  profiles:any = []

  profilForm : FormGroup = this.formBuilder.group({
    nom: ['',[Validators.minLength(3), Validators.required ]],
    prenom: ['',[Validators.minLength(3), Validators.required ]],
    active:[false]
  })

  get nom (){
    return this.profilForm.controls['nom']
  }
  get prenom (){
    return this.profilForm.controls['prenom']
  }

  onSubmit() {
    if(this.profilForm.valid){
      this.profiles.push(this.profilForm.value)
      console.log(this.profiles);
      
    }
  }
  
}
