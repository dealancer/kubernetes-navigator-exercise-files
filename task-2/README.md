# kubernetes Navigator Exercise Files

## Task 1

### Objective

Create deployment configuration for the `time-backend:v1` pod and apply this configuration in Kubernetes in `time` namespace.

### Implementation

1. Review `time-namespace.yml` and `time-backend-deployment.yml` in `task-2/time-manifests` subdir.

2. Change directory to `task-2/time-manifests`.
```
cd task-2/time-manifest
```

3. Apply all configurations. 
```
kubectl apply -f time-namespace.yml
kubectl apply -f time-backend-deployment.yml
```

4. Verify deployment in `time` namespace.
```
get deployment -n time
```

5. Get deployment details.
```
kubectl describe deployment time-backend-deployment -n time
```

6. Get pods running in `time` namespace.
```
kubectl get pods -n time
```

7. Delete one of the pods.
```
kubectl delete pod <NAME> -n time
```

8. Verify that a pod has been recreated by deployment.
```
kubectl get pods -n time
```
