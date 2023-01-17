import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Job} from "../../../../job";

@Component({
  selector: 'app-job-card',
  templateUrl: './job-card.component.html',
  styleUrls: ['./job-card.component.css']
})
export class JobCardComponent {
  @Input()
  public job!: Job;

  @Output()
  public onFilterChange = new EventEmitter<any>();

  addFilter(value: any) {
    const filterName = value.target.innerText;
    this.onFilterChange.emit(filterName);
  }
}
