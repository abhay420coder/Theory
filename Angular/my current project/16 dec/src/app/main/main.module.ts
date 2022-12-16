import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserModule } from '@angular/platform-browser';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { ServiceCreateUpdateComponent } from './service-create-update/service-create-update.component';
import { ServiceReleaseComponent } from './service-release/service-release.component';
import { ServiceComponent } from './service/service.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { ServiceReleaseCreateUpdateComponent } from './service-release-create-update/service-release-create-update.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ConfirmDialogComponent } from './utility/confirm-dialog/confirm-dialog.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { ReleaseTrainComponent } from './release-train/release-train.component';
import { ReleaseTrainCreateUpdateComponent } from './release-train-create-update/release-train-create-update.component';
import { KubernetesClusterComponent } from './kubernetes-cluster/kubernetes-cluster.component';
import { KubernetesClusterCreateUpdateComponent } from './kubernetes-cluster-create-update/kubernetes-cluster-create-update.component';
import { RtDeploymentsComponent } from './rt-deployments/rt-deployments.component';
import { ItemsAttacherComponent, SeconderyTextPipe } from './utility/items-attacher/items-attacher.component';
import { DialogItemAttacherComponent } from './utility/dialog-item-attacher/dialog-item-attacher.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { NamespaceComponent } from './namespace/namespace.component';
import { NamespaceCreateUpdateComponent } from './namespace-create-update/namespace-create-update.component';
import { RtDeployConfirmationComponent } from './rt-deploy-confirmation/rt-deploy-confirmation.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTooltipModule} from '@angular/material/tooltip';
import { RtTemplateCreateUpdateComponent } from './rt-template-create-update/rt-template-create-update.component';
import { MonacoEditorModule } from 'ngx-monaco-editor-v2';
import {MatTabsModule} from '@angular/material/tabs';
import { CodeEditorDialogComponent } from './utility/code-editor-dialog/code-editor-dialog.component';
import { ServiceDependencyTreeViewComponent } from './service-dependency-tree-view/service-dependency-tree-view.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NavbarComponent } from './navbar/navbar.component';
import { RtDeploymentLogComponent } from './rt-deployment-log/rt-deployment-log.component';
import { StatusTagComponent } from './utility/status-tag/status-tag.component';
import { K8sNodesComponent } from './k8s-nodes/k8s-nodes.component';
import {MatListModule} from '@angular/material/list';
import { NavItemComponent } from './utility/nav-item/nav-item.component';
import { RtTemplateComponent } from './rt-template/rt-template.component';
import { SearchBoxComponent } from './utility/search-box/search-box.component';
import {MatChipsModule} from '@angular/material/chips';
import { OverlayEditorComponent } from './utility/overlay-editor/overlay-editor.component';
import { FromNowPipe } from './utility/pipes/from-now-pipe';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StatusDashboardComponent } from './status-dashboard/status-dashboard.component';
import { ChartsModule } from 'ng2-charts';
import { TemplatesComponent } from './templates/templates.component';
import { TemplateCreateUpdateComponent } from './template-create-update/template-create-update.component';
import {MatStepperModule} from '@angular/material/stepper';
import { RtDeploymentsConfigViewComponent } from './rt-deployments-config-view/rt-deployments-config-view.component';
import { RtDeploymentsRedeploymentReviewComponent } from './rt-deployments-redeployment-review/rt-deployments-redeployment-review.component';
import { RtDeploymentsAddServiceComponent } from './rt-deployments-add-service/rt-deployments-add-service.component';
import { ImageNamePipe } from './utility/pipes/image-name-pipe';
import { RoleGuard } from '../services/role-guard';
import { AuthGuard } from '../services/auth-guard.service';
import { AddEndpointComponent } from './add-endpoint/add-endpoint.component';
import { ItemAttacherV2Component } from './utility/item-attacher-v2/item-attacher-v2.component';
import { DialogItemAttacherComponentV2 } from './utility/dialog-item-attacher-v2/dialog-item-attacher-v2.component';
import { ImgLinkValidatorPipe } from './utility/pipes/img-link-validator.pipe';
import {MatMenuModule} from '@angular/material/menu';
import { NamespaceDetailComponent } from './namespace-detail/namespace-detail.component';
import { ServiceHealthComponent } from './service-health/service-health.component';
import { AddK8sServiceComponent } from './add-k8s-service/add-k8s-service.component';
import { AddK8sRoleBindingComponent } from './add-k8s-role-binding/add-k8s-role-binding.component';
import { DynamicBgIconDirective } from './utility/directives/dynamic-bg-icon.directive';
import { RoleManagementComponent } from './role-management/role-management.component';
import { AddK8sDeploymnetComponent } from './add-k8s-deploymnet/add-k8s-deploymnet.component';
import { K8sServicesComponent } from './k8s-services/k8s-services.component';
import { K8sEndpointsComponent } from './k8s-endpoints/k8s-endpoints.component';
import { K8sRoleBindingComponent } from './k8s-role-binding/k8s-role-binding.component';
import { RtDeploymentHistoryComponent } from './rt-deployment-history/rt-deployment-history.component';
import { ParseUserName } from './utility/pipes/parse-user-pipe';
import { RtDeploymentSrHistoryViewComponent } from './rt-deployment-sr-history-view/rt-deployment-sr-history-view.component';
import { StatusColorPipe } from './utility/pipes/status-color-pipe';
import { DeploymentActionPipe } from './utility/pipes/action-pipe';
import { MultiItemAttacherModule } from '../multi-item-attacher/multi-item-attacher.module';
import { ParseIpFromStatusPipe } from './utility/pipes/parse-ip';
import { ParseNodeStatusPipe } from './utility/pipes/parse-node-status';
import { AddModifyLabelsComponent } from './add-modify-labels/add-modify-labels.component';
import { AddUpdateTaintsComponent } from './add-update-taints/add-update-taints.component';
import { SelectTemplateComponent } from './select-template/select-template.component';
import { CreateTemplateComponent } from './create-template/create-template.component';
import { K8sTemplatesComponent } from './k8s-templates/k8s-templates.component';
import {MatTableModule} from '@angular/material/table';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { NgxMatDatetimePickerModule, NgxMatNativeDateModule, NgxMatTimepickerModule } from '@angular-material-components/datetime-picker';
import { UtilityModule } from './utility/utility.module';
import { RtDeploymentsSrLockDetailComponent } from './rt-deployments/rt-deployments-sr-lock-detail/rt-deployments-sr-lock-detail.component';
import { EmployeeNamePipe } from './utility/pipes/employee-name';
import { CrateUpdateDeploymentLockComponent } from './rt-deployments/crate-update-deployment-lock/crate-update-deployment-lock.component';
import {MatBadgeModule} from '@angular/material/badge';

@NgModule({
  declarations: [MainComponent, ServiceComponent, ServiceReleaseComponent,
    ServiceCreateUpdateComponent, ServiceReleaseCreateUpdateComponent,
    ConfirmDialogComponent, ReleaseTrainComponent,
    ReleaseTrainCreateUpdateComponent, KubernetesClusterComponent,
    KubernetesClusterCreateUpdateComponent, RtDeploymentsComponent, ItemsAttacherComponent,
    DialogItemAttacherComponent, DialogItemAttacherComponentV2, NamespaceComponent, NamespaceCreateUpdateComponent,
    RtDeployConfirmationComponent, RtTemplateCreateUpdateComponent, CodeEditorDialogComponent, 
    ServiceDependencyTreeViewComponent, NavbarComponent, RtDeploymentLogComponent, StatusTagComponent, 
    K8sNodesComponent, NavItemComponent, RtTemplateComponent, SearchBoxComponent, OverlayEditorComponent, 
    FromNowPipe, SeconderyTextPipe, ImageNamePipe, PageNotFoundComponent, 
    StatusDashboardComponent, TemplatesComponent, TemplateCreateUpdateComponent, RtDeploymentsConfigViewComponent, 
    RtDeploymentsRedeploymentReviewComponent, RtDeploymentsAddServiceComponent, AddEndpointComponent, ItemAttacherV2Component,
    ImgLinkValidatorPipe,
    NamespaceDetailComponent,
    ServiceHealthComponent,
    AddK8sServiceComponent,
    AddK8sRoleBindingComponent,
    DynamicBgIconDirective,
    RoleManagementComponent,
    AddK8sDeploymnetComponent,
    K8sServicesComponent,
    K8sEndpointsComponent,
    K8sRoleBindingComponent,
    RtDeploymentHistoryComponent,
    ParseUserName,
    RtDeploymentSrHistoryViewComponent,
    StatusColorPipe,
    DeploymentActionPipe,
    ParseIpFromStatusPipe,
    ParseNodeStatusPipe,
    AddModifyLabelsComponent,
    AddUpdateTaintsComponent,
    SelectTemplateComponent,
    CreateTemplateComponent,
    K8sTemplatesComponent,
    RtDeploymentsSrLockDetailComponent,
    EmployeeNamePipe,
    CrateUpdateDeploymentLockComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MainRoutingModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatIconModule,
    MatSelectModule,
    MatSnackBarModule,
    MatAutocompleteModule,
    InfiniteScrollModule,
    NgxSkeletonLoaderModule,
    MatExpansionModule,
    MatTooltipModule,
    MonacoEditorModule.forRoot(),
    MatTabsModule,
    MatProgressSpinnerModule,
    MatListModule,
    MatChipsModule,
    ChartsModule,
    MatStepperModule,
    MatMenuModule,
    MatTableModule,
    MultiItemAttacherModule,
    MatDatepickerModule,
    NgxMatTimepickerModule,
    NgxMatDatetimePickerModule,
    NgxMatNativeDateModule,
    UtilityModule,
    MatBadgeModule
  ],
  providers: [AuthGuard, RoleGuard]
})
export class MainModule { }
