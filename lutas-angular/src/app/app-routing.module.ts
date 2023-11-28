import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AllLutasComponent } from './lutas/lutas/lutas.component';
import { PerfilLutasComponent } from './perfil-lutas/perfil-lutas.component';
import { CreateLutaComponent } from './create-luta/create-luta.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'lutas',
    loadChildren: () => import('./lutas/lutas.module').then(m => m.LutasModule)
  },

  {path: 'perfil-lutas', component: PerfilLutasComponent},

  {path: 'perfil-lutas/:id', component: PerfilLutasComponent},

  {path: 'create-luta', component: CreateLutaComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
