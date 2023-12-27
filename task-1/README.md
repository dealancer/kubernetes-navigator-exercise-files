# kubernetes Navigator Exercise Files

## Task 1

### Objective

Create and build time-backend:v1 docker image that serves traffic over 3000 port returning current timestamp.

### Implementation

1. Review `Dockerfile`, `app.js`, `package.json`, `package-lock.json` files.

2. To build a container, run following:
```
docker build . -t time-backend:v1
```

3. To test a container, run followng:
```
docker run -d -p 3000:3000 --name time-backend time-backend:v1
```

4. To test an app, run following:
```
curl 127.0.0.1:3000
```

5. To stop and remove container, run following:
```
docker stop time-backend
docker remove time-backend
```
