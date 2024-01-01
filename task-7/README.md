# Kubernetes Navigator exercise files

## Task 7

### Objective

Cleanup Kubernetes and Docker resources.

### Implementation

1. Delete `time` namespace.
```
kubectl delete namespace time
```

2. Verify that all resources have been deleted from `time` namespace.
```
kubectl get all -n time
```

3. Stop and delete Docker cotainers.
```
docker stop time-backend
docker remove time-backend
docker stop time-frontend
docker remove time-frontend
```

4. Verify that all Docker containers has been deleted.
```
docker ps
```
