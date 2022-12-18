import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { DragulaModule } from 'ng2-dragula';
import { FilterContainerComponent } from "./filter-container/filter-container.component";
import { FormattedDatePipe } from "./pipes/formatted-date-pipe";
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { MatInputModule } from "@angular/material/input";
import { InputDebounceDirective } from "./directives/input-debounce.directive";
import { MultiSelectSearchComponent } from "./multi-select-search/multi-select-search.component";
import { MatSelectModule } from "@angular/material/select";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
    declarations:[
        FormattedDatePipe,
        FilterContainerComponent, 
        InputDebounceDirective,
        MultiSelectSearchComponent
    ],
    imports :[
        CommonModule ,
        FormsModule,
        ReactiveFormsModule,
        MatMenuModule,
        MatButtonModule,
        MatInputModule,
        MatSelectModule,
        DragulaModule.forRoot(),
    ],
    exports:[
        FormattedDatePipe,
        FilterContainerComponent,
        InputDebounceDirective,
        MultiSelectSearchComponent
    ]
})

export class UtilityModule { }