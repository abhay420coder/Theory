import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogInComponent } from './log-in/log-in.component';
import { LogInRoutingModule } from './log-in-routing.module';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUPComponent } from './sign-up/sign-up.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// all angular material API imported  started
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatBadgeModule} from '@angular/material/badge';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatCommonModule} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import {MatRippleModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSliderModule} from '@angular/material/slider';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSortModule} from '@angular/material/sort';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTreeModule} from '@angular/material/tree';
// all angular material API imported  ended
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 


@NgModule({
  declarations: [
    LogInComponent,
    SignInComponent,
    SignUPComponent
  ],
  imports: [
    CommonModule,
    LogInRoutingModule,
    // all angular material module imported started
    MatAutocompleteModule,MatBadgeModule,MatBottomSheetModule,MatButtonModule,MatButtonToggleModule,
    MatCardModule,MatCheckboxModule,MatChipsModule,MatCommonModule,MatDatepickerModule,MatDialogModule,
    MatDividerModule,MatExpansionModule,MatFormFieldModule,MatGridListModule,MatIconModule,MatInputModule,
    MatListModule,MatMenuModule,MatPaginatorModule,MatProgressBarModule,MatProgressSpinnerModule,
    MatRadioModule,MatRippleModule,MatSelectModule,MatSidenavModule,MatSlideToggleModule,MatSliderModule,
    MatSnackBarModule,MatSortModule,MatStepperModule,MatTableModule,MatTabsModule,MatToolbarModule,MatTooltipModule,
    MatTreeModule,
    // all angular material module imported started
    FormsModule,
    ReactiveFormsModule,
    // BrowserAnimationsModule,
  ]
})
export class LogInModule { }
