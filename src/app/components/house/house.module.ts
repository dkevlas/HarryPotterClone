import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HouseRoutingModule } from './house-routing.module';
import { HouseComponent } from './house.component';
import { ErrorModule } from '../../error/error.module';
import { CoreModule } from '../core/core.module';
import { AchievementsComponent } from './achievements/achievements.component';
import { BecomeStudentComponent } from './become-student/become-student.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './achievements/gallery/gallery.component';
import { RequirementsComponent } from './become-student/requirements/requirements.component';


@NgModule({
  declarations: [
    HouseComponent,
    AchievementsComponent,
    BecomeStudentComponent,
    AboutComponent,
    GalleryComponent,
    RequirementsComponent
  ],
  imports: [
    CommonModule,
    HouseRoutingModule,
    ErrorModule,
    CoreModule
  ]
})
export class HouseModule { }
