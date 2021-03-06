import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  diabetesForm;

  constructor(
    private formBuilder: FormBuilder
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
    // Process checkout data here
    this.diabetesForm.reset();

    console.warn('Your order has been submitted', data);
  }
}
