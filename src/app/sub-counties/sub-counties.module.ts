import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';

import { SubCountiesComponent } from './sub-counties.component';
import {FormsModule} from '@angular/forms';
import {CreateSubCountyModule} from '../create-sub-county/create-sub-county.module';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [CommonModule, FormsModule, CreateSubCountyModule, RouterModule],
  declarations: [SubCountiesComponent],
  exports: [
    SubCountiesComponent
  ]
})
export class SubCountiesModule {}
