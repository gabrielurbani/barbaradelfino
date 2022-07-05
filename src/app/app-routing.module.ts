import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { RedesComponent } from './components/redes/redes.component';
import { TeatroComponent } from './components/teatro/teatro.component';


const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'teatro', component: TeatroComponent},
  {path: 'redes', component: RedesComponent},
  {path:'**', redirectTo: 'home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
