# Kubernetes Navigator exercise files

## Task 4

### Objective

Create NodePort service to balance traffic across `time-backend` pods.

### Implementation

1. Review `time-backend-service.yml` in `task-4/time-manifests` subdir.

2. Change directory to `task-4/time-manifests`:
```
cd task-4/time-backend-app
```

3. Deploy service cofiguration:
```
kubectl apply -f time-backend-service.yml
```

4. Verify service is up and running:
```
kubectl get service -n time
```

5. Test a service:
```
curl 127.0.0.1:30000
```
