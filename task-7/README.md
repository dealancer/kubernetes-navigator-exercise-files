# Kubernetes Navigator exercise files

## Task 6

### Objective

Create local PV and PVC resources and mount a volume to the `time-frontend` pod.


### Implementation

1. Review `time-frontend-pv.yml`, `time-frontend-pvc.yml`, and `time-frontend-deployment.yml` files in `task-7/time-manifests` subdir and review `task-7/files` subdir.

2. Change directory to `task-7/time-manifests`:
```
cd task-7/time-manifests
```

3. Replace `<ABSOLUTE-PATH-TO-FILES>` with the absolute path to `task-7/files` directory in `task-7/time-manifests` subdir.

4. Apply configurations:
```
kubectl apply -f time-frontend-pv.yml
kubectl apply -f time-frontend-pvc.yml
kubectl apply -f time-frontend-deployment.yml
```

5. Get pod name of time-frontend app:
```
POD=$(kubectl get pod -l app=time-frontend -n time -o jsonpath="{.items[0].metadata.name}")
echo $POD
```

6. Verify that you can see a file in the mounted volume to the pod:
```
kubectl exec -ti $POD -n time -- cat /home/node/app/files/example.txt
```
