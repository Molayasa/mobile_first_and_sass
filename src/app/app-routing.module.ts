import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UberComponent } from './components/uber/uber.component';
import { ColombianPointsComponent } from './components/colombian-points/colombian-points.component';

const routes: Routes = [
  { path: 'puntos-colombia', component: ColombianPointsComponent },
  { path: 'uber', component: UberComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
