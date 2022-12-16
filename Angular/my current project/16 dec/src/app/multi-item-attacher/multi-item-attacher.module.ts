import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultiAttacherComponent } from './multi-attacher/multi-attacher.component';
import { IsSelectedPipe } from './pipes/isSelected';
import { MatChipsModule } from '@angular/material/chips';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { SearchBoxComponent } from './search-box/search-box.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { InfiniteScrollModule } from "ngx-infinite-scroll";
import { MatButtonModule } from '@angular/material/button';




@NgModule({
  declarations: [
    MultiAttacherComponent,
    SearchBoxComponent,
    IsSelectedPipe
  ],
  imports: [
    CommonModule,
    MatChipsModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    InfiniteScrollModule
  ],
  exports: [
    MultiAttacherComponent
  ]
})
export class MultiItemAttacherModule { }
