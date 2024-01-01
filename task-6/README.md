# Kubernetes Navigator exercise files

## Task 6

### Objective

Create Config Map, Deployment, and Service resources for `time-frontend` component. Config map should contain URL of `time-backend` component to connect to.

### Implementation

1. Review `time-frontend-configmap.yml`, `time-frontend-deployment.yml`, `time-frontend-service.yml` files in `task-6/time-frontend-app` subdir.

2. Change directory to `task-6/time-manifests`:
```
cd task-6/time-manifests
```

3. Apply configurations:
```
kubectl apply -f time-frontend-configmap.yml
kubectl apply -f time-frontend-deployment.yml
kubectl apply -f time-frontend-service.yml
```

4. Verify `time-frontend` service works as expected:
```
curl http://localhost:30001/
```
