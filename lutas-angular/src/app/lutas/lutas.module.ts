import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

import { LutasRoutingModule } from './lutas-routing.module';
import { AllLutasComponent } from './lutas/lutas.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AllLutasComponent
  ],
  imports: [
    CommonModule,
    LutasRoutingModule,
    MatTableModule
  ]
})
export class LutasModule { }
