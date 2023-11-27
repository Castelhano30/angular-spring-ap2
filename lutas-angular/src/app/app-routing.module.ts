import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AllLutasComponent } from './lutas/lutas/lutas.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'lutas',
    loadChildren: () => import('./lutas/lutas.module').then(m => m.LutasModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
