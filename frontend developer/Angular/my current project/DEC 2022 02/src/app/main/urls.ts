import { environment } from "src/environments/environment";

export const globalUrls = {
    // Service URLs
    serviceCreateUpdate: environment.baseUrl + '/service/create-update',
    serviceList: environment.baseUrl + '/service/list',
    serviceRead: environment.baseUrl + '/service/read',
    serviceAttachedRoles: environment.baseUrl + "/service/service-has-roles/attached-list",
    serviceUpdateRoles: environment.baseUrl + "/service/service-has-roles/attach-unattach-roles",
    // Service Release URLs
    srList: environment.baseUrl + '/service-release/list',
    srRead: environment.baseUrl + '/service-release/read',
    srCreateUpdate: environment.baseUrl + '/service-release/create-update',
    srDepUnattachedList: environment.baseUrl + '/service-dep-map/unattached-list',
    srDepAttachedList: environment.baseUrl + '/service-dep-map/attached-list',
    srDepCreateUpdate: environment.baseUrl + '/service-dep-map/create-update-batch',
    srAttachedRoles: environment.baseUrl + '/service-release/service-release-has-roles/attached-list',
    srUpdateRoles: environment.baseUrl + '/service-release/service-release-has-roles/attach-unattach-roles',
    // Templates URLs
    templateList: environment.baseUrl + "/k8s-spec-template/list",
    templateCreateUpdate: environment.baseUrl + "/k8s-spec-template/create-update",
    templateAttachedRoles: environment.baseUrl + '/k8s-spec-template/k8s-spec-template-has-roles/attached-list',
    templateUpdateRoles: environment.baseUrl + '/k8s-spec-template/k8s-spec-template-has-roles/attach-unattach-roles',

    k8sObjectTemplateList: environment.baseUrl + "/k8s-objects-template/list",
    k8sObjectTemplateCreateUpdate: environment.baseUrl + "/k8s-objects-template/create-update",
    // Release train URLs
    rtCreateUpdate: environment.baseUrl + '/rt/create-update',
    rtList: environment.baseUrl + '/rt/list',
    rtRead: environment.baseUrl + '/rt/read',
    rtServiceRelCreateUpdate: environment.baseUrl + '/rt/service-release/create-update-batch',
    rtServiceRelAttachedList: environment.baseUrl + '/rt/service-release/attached-list',
    rtServiceRelUnattachedList: environment.baseUrl + '/rt/service-release/unattached-list',
    rtAttachedRoles: environment.baseUrl + '/rt/rt-has-roles/attached-list',
    rtUpdateRoles: environment.baseUrl + '/rt/rt-has-roles/attach-unattach-roles',
    // kubernetes cluster URLs
    k8sClusterCreateUpdate: environment.baseUrl + '/k8s-cluster/create-update',
    k8sClusterList:environment.baseUrl + '/k8s-cluster/list',
    k8sClusterCheckConn: environment.baseUrl + '/k8s-cluster/check',
    // Release Train Deployments URLs
    rtDeploymentList:environment.baseUrl+ '/rt-deployment/list',
    rtDeploymentHasLockUnlock:environment.baseUrl+ '/rt-deployment-has-lock-unlock/create-update',
    rtDeploymentRead:environment.baseUrl+ '/rt-deployment/read',
    rtDeploymentDeploy:environment.baseUrl+ '/rt-deployment/deploy',
    rtDeploymentReDeploy:environment.baseUrl+ '/rt-deployment/re-deploy',
    rtDeploymentReDeploySerRel:environment.baseUrl+ '/rt-deployment/re-deploy-service-release',
    rtDeploymentHardReDeploySerRel:environment.baseUrl+ '/rt-deployment/hard-re-deploy-service-release',
    rtDeploymentDelete:environment.baseUrl+ '/rt-deployment/delete',
    rtDeploymentHasK8SpecList: environment.baseUrl + '/rt-deployment-sr-rel-has-k8s-spec-template/list',
    rtDeploymentAddServiceRel: environment.baseUrl + "/rt-deployment/deploy-new-service-release",
    rtDeploymentHistoryList: environment.baseUrl + '/rt-deployment-has-history/list',
    rtDeploymentHistoryRead: environment.baseUrl + "/rt-deployment-has-history/read",
    // Namespace URLs
    nsList: environment.baseUrl + '/namespace/list',
    nsCreateUpdate: environment.baseUrl + '/namespace/create-update',
    nsRead: environment.baseUrl + '/namespace/read',
    nsAttachedRoles: environment.baseUrl + '/namespace/namespace-has-roles/attached-list',
    nsUpdateRoles: environment.baseUrl + '/namespace/namespace-has-roles/attach-unattach-roles',
    nsAddEndpoint: environment.baseUrl + '/k8s-namespaced-endpoint/create',
    nsEndpointsList: environment.baseUrl + '/k8s-services/endpoint/list',
    nsEndpointsListDb: environment.baseUrl + '/k8s-namespaced-endpoint/list',
    nsEndpointsPatch: environment.baseUrl + '/k8s-namespaced-endpoint/patch',
    nsEndpointsReplace: environment.baseUrl + '/k8s-namespaced-endpoint/replace',
    nsEndpointsRetry: environment.baseUrl + '/k8s-namespaced-endpoint/retry',
    nsServicesList: environment.baseUrl + '/k8s-services/service/list',
    nsServicesListDb: environment.baseUrl + '/k8s-namespaced-service/list',
    nsServicePatch: environment.baseUrl + '/k8s-namespaced-service/patch',
    nsServiceReplace: environment.baseUrl + '/k8s-namespaced-service/replace',
    nsServiceRetry: environment.baseUrl + '/k8s-namespaced-service/retry',
    nsAddK8sService: environment.baseUrl + '/k8s-namespaced-service/create',
    nsAddK8sRoleBinding: environment.baseUrl + '/k8s-namespaced-role-binding/create',
    nsK8sRoleBindingList: environment.baseUrl + '/k8s-services/role-binding/list',
    nsK8sRoleBindingListDb: environment.baseUrl + '/k8s-namespaced-role-binding/list',
    nsK8sRoleBindingPatch: environment.baseUrl + "/k8s-namespaced-role-binding/patch",
    nsK8sRoleBindingReplace: environment.baseUrl + "/k8s-namespaced-role-binding/replace",
    nsK8sRoleBindingRetry: environment.baseUrl + "/k8s-namespaced-role-binding/retry",
    nsK8sDeploymentList: environment.baseUrl + '/k8s-namespaced-deployment/list',
    nsK8sDeploymentAdd: environment.baseUrl + '/k8s-namespaced-deployment/create',
    nsK8sDeploymentPatch: environment.baseUrl + '/k8s-namespaced-deployment/patch',
    nsK8sDeploymentHardRedeploy: environment.baseUrl + '/k8s-namespaced-deployment/hard-redeploy',
    // RT Template URLs
    rtTemplateList: environment.baseUrl + '/rt-template/list',
    rtTemplateCreateUpdate: environment.baseUrl + '/rt-template/create-update',
    rtTemplateRead: environment.baseUrl + '/rt-template/read',
    
    // RT Template Has Ser release URLs
    rtTemplateHasSrRelList: environment.baseUrl + '/rt-template-has-ser-rel/list',
    rtTemplateHasSrRelCreateUpdate: environment.baseUrl + '/rt-template-has-ser-rel/create-update',
    rtTemplateHasSrRelRead: environment.baseUrl + '/rt-template-has-ser-rel/read',

    // Log Out URLs
    logout: environment.sts + '/token/logout',

    // Employee URLs
    employeeInfo: environment.vcaIdentityUrl + '/employee-info',
    // employeeDetailById: environment.vcaBaseUrl + "/vca-front/api/v1.0/ui/employee/get-employee-details-by-employee-id-list",
    employeeDetailById: environment.vcaIdentityUrl + "/employee/get-employee-details-by-employee-id-list",

    //Pods URLS
    podList: environment.baseUrl + "/k8s-services/pod/list",
    podLog: environment.baseUrl + "/k8s-services/pod/logs",

    //Node URLS
    nodeList: environment.baseUrl + "/k8s-services/node/list",
    updateLabels: environment.baseUrl + "/k8s-services/node/add-update-labels",
    updateTaints: environment.baseUrl + "/k8s-services/node/add-taint",

    //Node URLS
    deploymentList: environment.baseUrl + "/k8s-services/deployment/list",

    // RT Deployment Has Service Release URLs
    rtDeploymentHasSrRelList: environment.baseUrl + '/rt-deployment-has-ser-rel/list',
    rtDeploymentHasSrRelCreateUpdate: environment.baseUrl + '/rt-deployment-has-ser-rel/create-update',
    rtDeploymentHasSrRelRead: environment.baseUrl + '/rt-deployment-has-ser-rel/read',
    rtDeploymentHasSrRelHistoryList: environment.baseUrl + "/rt-deployment-has-ser-rel-has-history/list",
    rtDeploymentHasSrRelHistoryRead: environment.baseUrl + "/rt-deployment-has-ser-rel-has-history/read",

    //web socket urls
    wsDeploymentUpdate: environment.websocketBaseUrl + '/deploymentupdates',

    //roles and permissions
    vcaRolesAndPerms: environment.vcaIdentityUrl + '/employee/list-roles-and-permission',
    // vcaRolesAndPerms: environment.vcaBussinessConfig + '/role/list-roles-and-permissions'

    //other urls
    fallbackIconUrl: "/assets/icons/services/unknown-default.svg",

    //log urls
    filterVarList: "/vca-logs/api/v1.0/ui/generic-search/get-fields-by-index-name",
    modulesList: "/vca-logs/api/v1.0/ui/vca-logs/list-all-log-indices",
    logList: "/vca-logs/api/v1.0/ui/vca-logs/search-with-expression-filters",
    frontList: environment.vcaIdentityUrl + "/front/business-front/list",
    employeeList: environment.vcaIdentityUrl + "/front/employee-list",

    //DB Monitoring URLs
    // runningQueriesList: environment.baseUrl + "/performance-schema/current-running-queries"
    runningQueriesList: environment.dbMonitoringHost + "/cordis-monitor/secure/performance-schema/current-running-queries",
    informationSchemaGlobalStatus :  environment.dbMonitoringHost + '/cordis-monitor/secure/information-schema/global-status',
    performanceSchemaGlobalStatus :  environment.dbMonitoringHost + '/cordis-monitor/secure/performance-schema/global-status'

}
