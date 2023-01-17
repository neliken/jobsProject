import {Component, Input, ElementRef, ViewChild, OnInit} from '@angular/core';
import {Job} from "../../../../job";;

@Component({
  selector: 'app-jobs-page',
  templateUrl: './jobs-page.component.html',
  styleUrls: ['./jobs-page.component.css']
})
export class JobsPageComponent implements OnInit {
  @Input()
  public jobs: Job[] = [];
  filteredJobs: Job[] = [];

  filters: Array<string> = [];


  ngOnInit(): void {
    this.filteredJobs = this.jobs;
  }

  filterJobs() {
    this.filteredJobs = [];
    // @ts-ignore
    this.filteredJobs = this.jobs.filter(job => {
      for (let filter of this.filters) {
        if(job.level === filter || job.role == filter || job.languages.includes(filter) || job.tools.includes(filter)) {
            return job;
        }
      }
    })
  }

  add(value: string): void {
    if (!this.filters.includes(value)) {
      this.filters.push(value)
    }
    this.filterJobs();
  }

  remove(filter: string): void {
    const index = this.filters.indexOf(filter);

    if (index >= 0) {
      this.filters.splice(index, 1);
    }

    this.filterJobs();

    if(this.filters.length === 0) {
      this.filteredJobs = this.jobs;
    }
  }

  removeAllFilters() {
    this.filters = [];
    this.filteredJobs = this.jobs;
  }
}
