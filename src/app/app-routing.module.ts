import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PagAndreComponent } from './pag-andre/pag-andre.component';
import { PagCarlosComponent } from './pag-carlos/pag-carlos.component';
import { PagMatheusComponent } from './pag-matheus/pag-matheus.component';
import { HomePage } from './home/home.page';

const routes: Routes = [
  {path: '', component : HomePage},
  {path: 'pagAndre', component: PagAndreComponent},
  {path: 'pagCarlos', component: PagCarlosComponent},
  {path: 'pagMatheus', component: PagMatheusComponent}
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
