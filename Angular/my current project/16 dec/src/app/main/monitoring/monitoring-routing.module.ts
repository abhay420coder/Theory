import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "src/app/services/auth-guard.service";
import { DbMonitoringComponent } from "./db-monitoring/db-monitoring.component";
import { MonitoringComponent } from "./monitoring.component";
import { NamespaceLogsComponent } from "./namespace-logs/namespace-logs.component";


const routes: Routes = [
            {
                path:'logs',
                component:NamespaceLogsComponent,
                // canActivate: [RoleGuard]
              },
              {
                path:'db-monitoring',
                component:DbMonitoringComponent,
                // canActivate: [RoleGuard]
              },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MonitoringRoutingModule { }
