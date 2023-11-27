import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AllLutasComponent } from './lutas/lutas.component';

const routes: Routes = [
  { path: '', component: AllLutasComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LutasRoutingModule { }
