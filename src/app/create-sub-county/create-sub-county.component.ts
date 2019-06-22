import {Component, EventEmitter, OnInit, Output, Input, OnChanges, SimpleChanges} from '@angular/core';
import {NewCounty} from '../../interfaces/subCounties';

@Component({
  selector: 'app-create-sub-county',
  templateUrl: './create-sub-county.component.html',
  styleUrls: ['./create-sub-county.component.scss']
})

export class CreateSubCountyComponent implements OnInit, OnChanges {
  @Input()
  s: string;
  @Output()
  create: EventEmitter<NewCounty> = new EventEmitter<NewCounty>();
  addCounty = (state: NewCounty) => this.create.emit(state);
  ngOnInit(): void {}
  ngOnChanges(changes: SimpleChanges): void {
    this.s = changes.s.currentValue;
  }
}

