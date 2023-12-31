# Kubernetes Navigator exercise files

## Task 5

### Objective

Build `time-frontend:v1` Docker image that gets a timestamp from `time-backend` service and displays it in a human readable format. Pass URL string for `time-backend` service as an environment variable.

### Implementation

1. Review `app.js` in `task-5/time-frontend-app` subdir.

2. Change directory to `task-5/time-frontend-app`:
```
cd task-5/time-frontend-app
```

3. Build an image:
```
docker build . -t time-frontend:v1
```

4. Run a container:
```
docker run -d -p 3001:3000 --name time-frontend --env TIME_BACKEND_URL=http://host.docker.internal:30000 time-frontend:v1
```

5. Test an app:
```
curl 127.0.0.1:3001
```

6. Stop and remove container:
```
docker stop time-frontend
docker remove time-frontend
```
