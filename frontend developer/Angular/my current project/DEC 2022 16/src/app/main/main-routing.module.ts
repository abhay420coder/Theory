import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../services/auth-guard.service';
import { RoleGuard } from '../services/role-guard';
import { DbMonitoringComponent } from './monitoring/db-monitoring/db-monitoring.component';
import { K8sNodesComponent } from './k8s-nodes/k8s-nodes.component';
import { K8sTemplatesComponent } from './k8s-templates/k8s-templates.component';
import { MainComponent } from './main.component';
import { MonitoringComponent } from './monitoring/monitoring.component';
import { NamespaceDetailComponent } from './namespace-detail/namespace-detail.component';
import { NamespaceLogsComponent } from './monitoring/namespace-logs/namespace-logs.component';
import { NamespaceComponent } from './namespace/namespace.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ReleaseTrainComponent } from './release-train/release-train.component';
import { RoleManagementComponent } from './role-management/role-management.component';
import { RtDeployConfirmationComponent } from './rt-deploy-confirmation/rt-deploy-confirmation.component';
import { RtDeploymentHistoryComponent } from './rt-deployment-history/rt-deployment-history.component';
import { RtDeploymentLogComponent } from './rt-deployment-log/rt-deployment-log.component';
import { RtDeploymentSrHistoryViewComponent } from './rt-deployment-sr-history-view/rt-deployment-sr-history-view.component';
import { RtDeploymentsComponent } from './rt-deployments/rt-deployments.component';
import { RtTemplateCreateUpdateComponent } from './rt-template-create-update/rt-template-create-update.component';
import { RtTemplateComponent } from './rt-template/rt-template.component';
import { ServiceDependencyTreeViewComponent } from './service-dependency-tree-view/service-dependency-tree-view.component';
import { ServiceHealthComponent } from './service-health/service-health.component';
import { ServiceReleaseComponent } from './service-release/service-release.component';
import { ServiceComponent } from './service/service.component';
import { StatusDashboardComponent } from './status-dashboard/status-dashboard.component';
import { TemplatesComponent } from './templates/templates.component';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'main/service',
  //   pathMatch: 'full'
  // },
  {
    path: 'main',
    component: MainComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'service',
        component: ServiceComponent,
        canActivate: [RoleGuard]
      },
      {
        path: 'service-release',
        component: ServiceReleaseComponent,
        canActivate: [RoleGuard]
      },
      {
        path: 'templates',
        component: TemplatesComponent,
        canActivate: [RoleGuard]
      },
      {
        path: 'release-train',
        component: ReleaseTrainComponent,
        canActivate: [RoleGuard]
      },
      {
        path: 'release-train/deploy/:rtId',
        component: RtDeployConfirmationComponent
      },
      {
        path: 'kubernetes-namespace/:nsId',
        component: NamespaceDetailComponent,
        canActivate: [RoleGuard],
      },
      {
        path: 'kubernetes-namespace',
        component: NamespaceComponent,
        canActivate: [RoleGuard],
      },
      {
        path: 'kubernetes-templates',
        component: K8sTemplatesComponent,
      },
      {
        path: 'rt-deployments',
        component: RtDeploymentsComponent
        // canActivate: [RoleGuard]
      },
      {
        path: 'release-train/rt-template-create-update/:rtId/:id',
        component: RtTemplateCreateUpdateComponent
      },
      {
        path: 'service-release-tree-view',
        component: ServiceDependencyTreeViewComponent
      },
      {
        path: 'rt-deployments/pod-health/:namespace/:srId',
        component: ServiceHealthComponent
      },
      {
        path: 'rt-deployments/pod-log/:deploymentId/:id',
        component: RtDeploymentLogComponent
      },
      {
        path: 'rt-deployments/deployment-history/:type/:id',
        component: RtDeploymentHistoryComponent
      },
      {
        path: 'rt-deployments/deployment-history/view/service/:id',
        component: RtDeploymentSrHistoryViewComponent
      },
      {
        path: "k8s-nodeList",
        component: K8sNodesComponent
      },
      {
        path: 'release-train/rt-templates/:rtId',
        component: RtTemplateComponent
      },
      {
        path: 'status-view/:type',
        component: StatusDashboardComponent
      },
      {
        path: 'role-management',
        component: RoleManagementComponent,
        canActivate: [RoleGuard]
      },
      {
        path: 'monitoring',
        loadChildren:()=>import('./monitoring/monitoring.module').then(mod=> mod.MonitoringModule),
        canActivate: [AuthGuard]
        
      },
      {
        path: '',
        redirectTo: 'rt-deployments',
        pathMatch: 'full'
      },
      {
        path: '**',
        component: PageNotFoundComponent
      }
    ]

  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true
  })],
  exports: [RouterModule]
})
export class MainRoutingModule { }
