import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {

  diabetesForm;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.diabetesForm = new FormGroup({
      name: new FormControl('null'),
      glucose: new FormControl('100'),
      insulin: new FormControl('100'),
      bloodPressure: new FormControl('80'),
      bmi: new FormControl('21'),
      skinThickness: new FormControl('15'),
      age: new FormControl('30'),
      pregnancies: new FormControl('1'),
      email: new FormControl('null'),
    });
  }

  title = 'noxum';

  onSubmit(data) {
    this.diabetesForm.reset();
    console.warn('Your order has been submitted', data);
    this.router.navigate(['/results/' + this.hasDiabetes(data)]);
  }

  hasDiabetes(data) {
    if(true) {
      return true;
    }
    else {
      return false;
    }
  }

}
