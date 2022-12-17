/* *****************IMPORTANT************** */
/* DON'T ADD ANY NEW INDENTATION OR EXTRA SPACE. */
/* DON'T UPDATE THIS IF YOY DONT KNOW ABOUT YAML AND K8s */
export const k8sServiceTemplate = 
`apiVersion: v1
kind: Service
metadata:
  name: vca-dummy
spec:
  selector:
    app: vca-dummy
  type: LoadBalancer
  ports:
    - protocol: TCP
      targetPort: 8000
      port: 8000`