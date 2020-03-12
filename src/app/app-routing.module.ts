import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResultsComponent } from './results/results.component';
import { CalculatorComponent } from './calculator/calculator.component';


const routes: Routes = [{ path: 'results/:outcome', component: ResultsComponent}, { path: 'calculator', component: CalculatorComponent}, { path: '**', component: CalculatorComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
