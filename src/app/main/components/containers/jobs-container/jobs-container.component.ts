import {Component, OnInit} from '@angular/core';
import {Job} from "../../../../job";
import data from "../../../../data.json";

@Component({
  selector: 'app-jobs-container',
  template: `<app-jobs-page [jobs]="jobs"></app-jobs-page>`
})
export class JobsContainerComponent implements OnInit {
  jobs: Job[] = data;

  ngOnInit(): void {
    console.log(this.jobs)
  }
}
