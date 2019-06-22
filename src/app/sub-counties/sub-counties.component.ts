import {Component, OnInit} from '@angular/core';
import { DataStorageService } from '../../services/dataStorage.service';
import {NewCounty, SubCounty} from '../../interfaces/subCounties';

@Component({
  selector: 'app-sub-counties',
  templateUrl: './sub-counties.component.html',
  styleUrls: ['./sub-counties.component.scss']
})

export class SubCountiesComponent implements OnInit {
  constructor(
    private subCounties: DataStorageService,
  ) {}
  subs: SubCounty[];
  name = 'this is my name';
  ngOnInit(): void {
    this.subCounties.getAllSubCounties()
      .subscribe((response: SubCounty[]) => {
        this.subs = response;
      });
  }
  addCounty(state: NewCounty) {
    this.subCounties.createSubCounty(state)
      .subscribe((response: SubCounty) => this.subs.push(response));
  }
}
