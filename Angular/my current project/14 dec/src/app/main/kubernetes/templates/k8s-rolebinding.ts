/* *****************IMPORTANT************** */
/* DON'T ADD ANY NEW INDENTATION OR EXTRA SPACE. */
/* DON'T UPDATE THIS IF YOY DONT KNOW ABOUT YAML AND K8s */
export const k8sRoleBindingTemplate = 
`apiVersion: rbac.authorization.k8s.io/v1
kind: RoleBinding
metadata:
  name: default:service-discovery-client
  namespace: vca-dummy
roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: ClusterRole
  name: service-discovery-client
subjects:
- kind: ServiceAccount
  name: default
  namespace: vca-dummy`