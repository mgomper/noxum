import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as tf from '@tensorflow/tfjs';


@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {

  diabetesForm;
  error = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.diabetesForm = new FormGroup({
      name: new FormControl('Your name', [
        Validators.minLength(1),
        Validators.maxLength(30)
      ]),
      glucose: new FormControl('100', [
        Validators.required,
        Validators.min(30),
        Validators.max(350)
      ]),
      insulin: new FormControl('100', [
        Validators.required,
        Validators.min(5),
        Validators.max(1000)
      ]),
      bloodPressure: new FormControl('80', [
        Validators.required,
        Validators.min(20),
        Validators.max(200)
      ]),
      bmi: new FormControl('21', [
        Validators.required,
        Validators.min(10),
        Validators.max(60)
      ]),
      skinThickness: new FormControl('15', [
        Validators.required,
        Validators.min(5),
        Validators.max(70)
      ]),
      age: new FormControl('30', [
        Validators.required,
        Validators.min(0),
        Validators.max(120)
      ]),
      pedigree: new FormControl('1', [
        Validators.required,
        Validators.min(0),
        Validators.max(5)
      ]),
      pregnancies: new FormControl('1', [
        Validators.required,
        Validators.min(0),
        Validators.max(20)
      ]),
    });
  }


  title = 'noxum';

  onSubmit(data) {
    if (this.diabetesForm.valid) {
      // this.diabetesForm.reset();
      this.router.navigate(['/results/' + this.hasDiabetes(data)]);
    } else {
      this.error = true;
    }
  }

  async hasDiabetes(data) {

    const model = await tf.loadLayersModel('https://noxum.nl/model.json');

    const a = tf.tensor([+this.diabetesForm.get('pregnancies').value,
    +this.diabetesForm.get('glucose').value,
    +this.diabetesForm.get('bloodPressure').value,
    +this.diabetesForm.get('skinThickness').value,
    +this.diabetesForm.get('insulin').value,
    +this.diabetesForm.get('bmi').value,
    +this.diabetesForm.get('pedigree').value,
    +this.diabetesForm.get('age').value]).expandDims();

    (model.predict(a) as tf.Tensor).print();
    
    if (true) {
      return true;
    }
    else {
      return false;
    }
  }

  get name() {
    return this.diabetesForm.get('name');
  }

  get glucose() {
    return this.diabetesForm.get('glucose');
  }

  get insulin() {
    return this.diabetesForm.get('insulin');
  }

  get bloodPressure() {
    return this.diabetesForm.get('bloodPressure');
  }

  get skinThickness() {
    return this.diabetesForm.get('skinThickness');
  }

  get age() {
    return this.diabetesForm.get('age');
  }

  get pregnancies() {
    return this.diabetesForm.get('pregnancies');
  }

  get email() {
    return this.diabetesForm.get('email');
  }

  get bmi() {
    return this.diabetesForm.get('bmi');
  }

  get pedigree() {
    return this.diabetesForm.get('pedigree');
  }

}
