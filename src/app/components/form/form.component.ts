import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder,FormArray, FormControl, Validators, AbstractControl, ValidatorFn, } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Output() addAlumno: EventEmitter<any> = new EventEmitter<any>();

  formulario = this.formBuilder.group({
    nombre: ['',[Validators.required]],
    apellido: ['',[Validators.required]],
    edad: ['',[Validators.required, Validators.min(18), this.validarEdad()]],
    cursos: new FormArray([new FormControl()]) 
  });


  constructor(
    private formBuilder : FormBuilder
  ) { }

  ngOnInit(): void {
  }

  submitForm():void{
    
    if(this.formulario.valid){
      console.log(this.formulario.value);
      this.addAlumno.emit(this.formulario.value);
      this.formulario.reset();
    } else {
      this.formulario.markAllAsTouched();
    }
  }


  get cursos(): FormArray{
    return this.formulario.get('cursos') as FormArray
  }

  agregarCurso(): void{
    this.cursos.push(new FormControl() )
  }


  validarEdad() : ValidatorFn{
    return (control: AbstractControl): {[key: string]:any}|null =>{
      return(!Number.isInteger(parseInt(control.value))) ? {errorEdad:true} : null;
    }
  }
}
