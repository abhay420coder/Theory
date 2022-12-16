/* *****************IMPORTANT************** */
/* DON'T ADD ANY NEW INDENTATION OR EXTRA SPACE. */
/* DON'T UPDATE THIS IF YOY DONT KNOW ABOUT YAML AND K8s */
export const k8sEndPointTemplate = 
`apiVersion: v1
kind: Endpoints
metadata:
  name: vca-dummy
subsets:
  - addresses:
       - ip: 192.168.1.37
    ports:
       - port: 8000`