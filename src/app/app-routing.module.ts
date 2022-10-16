import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardListComponent } from './components/card-list/card-list.component';

const routes: Routes = [ { path:'', component:CardListComponent },
{ path:'detail/:index', loadComponent: ()=> import('./components/dog-detail/dog-detail.component').then(m=>m.DogDetailComponent) },
{ path:'**', component:CardListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
