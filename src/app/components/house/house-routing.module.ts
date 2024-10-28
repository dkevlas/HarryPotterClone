import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HouseComponent } from './house.component';
import { AboutComponent } from './about/about.component';
import { BecomeStudentComponent } from './become-student/become-student.component';
import { AchievementsComponent } from './achievements/achievements.component';

const routes: Routes = [
  {
    path: '',
    component: HouseComponent,
    children: [
      {
        path: '',
        redirectTo: 'nosotros',
        pathMatch: 'full'
      },
      {
        path: 'nosotros',
        component: AboutComponent
      },
      {
        path: 'logros',
        component: AchievementsComponent
      },
      {
        path: 'ser-estudiante',
        component: BecomeStudentComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HouseRoutingModule { }