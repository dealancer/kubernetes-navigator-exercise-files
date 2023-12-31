# Kubernetes Navigator exercise files

## Task 1

### Objective

Build `time-backend:v1` docker image that serves traffic over 3000 port returning current timestamp. Run image as a container.

### Implementation

1. Review `Dockerfile`, `app.js`, `package.json`, `package-lock.json` files in `task-1/time-backend-app` subdir.

2. Change directory to `task-1/time-backend-app`:
```
cd task-1/time-backend-app
```

3. Build an image:
```
docker build . -t time-backend:v1
```

4. Run a container:
```
docker run -d -p 3000:3000 --name time-backend time-backend:v1
```

5. Test an app:
```
curl 127.0.0.1:3000
```

6.Stop and remove container:
```
docker stop time-backend
docker remove time-backend
```
