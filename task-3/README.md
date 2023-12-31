# Kubernetes Navigator exercise files

## Task 3

### Objective

Create a new version of `time-backend` image to output timestamp using JSON format and update the deployment.

### Implementation

1. Review `task-3/time-backend-app/app.js` and `task-3/time-manifests/time-backend-deployment.yml` files.

2. Change directory to `task-3/time-backend-app`:
```
cd task-3/time-backend-app
```

3. Build a new version of the image:
```
docker build . -t time-backend:v2
```

4. Change directory to `task-3/time-manifests`:
```
cd ../time-manifests
```

5. Apply deployment configurations:
```
kubectl apply -f time-backend-deployment.yml
```

6. Get pods in `time` namespace:
```
kubectl get pods -n time
```

7. Verify which version of the image is used:
```
kubectl get pod <POD-NAME> -n time -o=jsonpath='{.spec.containers[*].image}'
```
