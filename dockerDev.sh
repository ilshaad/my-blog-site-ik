docker build -t blogsite -f Dockerfile.dev . && \
docker run -p 3000:3000 blogsite