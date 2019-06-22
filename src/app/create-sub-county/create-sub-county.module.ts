import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';

import { CreateSubCountyComponent } from './create-sub-county.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [CreateSubCountyComponent],
  exports: [
    CreateSubCountyComponent
  ]
})
export class CreateSubCountyModule {}
