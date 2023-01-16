import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {JobsContainerComponent} from './components/containers/jobs-container/jobs-container.component';
import {JobsPageComponent} from './components/presentational/jobs-page/jobs-page.component';
import {MatCardModule} from "@angular/material/card";
import { JobCardComponent } from './components/presentational/job-card/job-card.component';


@NgModule({
  declarations: [
    JobsContainerComponent,
    JobsPageComponent,
    JobCardComponent
  ],
  exports: [
    JobsPageComponent,
    JobsContainerComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
  ]
})
export class MainModule {
}
