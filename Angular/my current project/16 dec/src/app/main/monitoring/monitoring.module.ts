import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatTabsModule} from '@angular/material/tabs';
import { NamespaceLogsComponent } from './namespace-logs/namespace-logs.component';
import { DbMonitoringComponent } from './db-monitoring/db-monitoring.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { DbMonitoringDataFormatPipe } from './db-monitoring/db-data-format-pipe';
import { SplitPipe } from '../utility/pipes/split.pipe';
import { AuthGuard } from 'src/app/services/auth-guard.service';
import { RoleGuard } from 'src/app/services/role-guard';
import {MatTableModule} from '@angular/material/table';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MonitoringComponent } from './monitoring.component';
import { MonitoringRoutingModule } from './monitoring-routing.module';
import { CurrentRunningQueriesComponent } from './current-running-queries/current-running-queries.component';
import { DbGlobalStatusComponent } from './db-global-status/db-global-status.component';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { UtilityModule } from '../utility/utility.module';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { GlobalStatusDescriptonPipe } from './db-monitoring/global-status-descripton.pipe';

@NgModule ({
  declarations: [
    NamespaceLogsComponent,
    DbMonitoringComponent,
    DbMonitoringDataFormatPipe,
    SplitPipe,
    MonitoringComponent,
    CurrentRunningQueriesComponent,
    DbGlobalStatusComponent,
    GlobalStatusDescriptonPipe
  ],
  imports: [
    MonitoringRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UtilityModule,
    MatInputModule,
    MatTabsModule,
    MatAutocompleteModule,
    MatTableModule,    
    MatFormFieldModule,    
    MatSelectModule,
    MatButtonModule,
    MatTooltipModule,
    MatChipsModule,
    MatIconModule,
    NgxSkeletonLoaderModule
  ],
  providers: [AuthGuard, RoleGuard]
})
export class MonitoringModule { }