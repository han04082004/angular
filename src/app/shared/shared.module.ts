import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgxPaginationModule} from 'ngx-pagination';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgxPaginationModule
  ],
  exports:[
    CommonModule,
    NgxPaginationModule
  ],
})
export class SharedModule { }
