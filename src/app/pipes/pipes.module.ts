import {NgModule} from '@angular/core';

import { EnumToArrayPipe } from './enum-to-array.pipe';



@NgModule({
  exports: [
    EnumToArrayPipe,
  ],
  declarations: [EnumToArrayPipe]
})
export class PipesModule {}
