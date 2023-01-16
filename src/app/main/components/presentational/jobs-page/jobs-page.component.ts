import {Component, Input} from '@angular/core';
import {Job} from "../../../../job";

@Component({
  selector: 'app-jobs-page',
  templateUrl: './jobs-page.component.html',
  styleUrls: ['./jobs-page.component.css']
})
export class JobsPageComponent {
  @Input()
  public jobs: Job[] = []
}
