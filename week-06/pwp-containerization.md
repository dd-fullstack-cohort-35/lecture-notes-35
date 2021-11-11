# PWP Containerization

## Hosting
- We use virtual private server - not a real computer, but a virtual slice of somebody else's computer on the interet
    - in Digital Ocean parlance, this is a droplet
- However, we want to make our PWP easily transferable - thus we use Docker container to host it
- this code walkthrough shows you how to add Docker to your site, and how to use that to launch it on your droplet

## Adding docker to your container
- Instructors will start with contact-form-demo repository, you should follow these instructions on your PWP
- Add deployment in Webstorm
    - Use your droplet IP address for SSH rather than ddc-web-student
- Configure the node_modules folder to be ignored during deployment
    - Tools -> Deployment -> Options
    - Exclude items by name: node_modules
- Add src/Dockerfile (no extension)
    ```dockerfile
    # https://github.com/BretFisher/node-docker-good-defaults/blob/69c923bc646bc96003e9ada55d1ec5ca943a1b19/Dockerfile
    FROM node:12
  
    # Set environment variables.
    ARG NODE_ENV=development
    ENV NODE_ENV $NODE_ENV
    ARG PORT=4200
    ENV PORT $PORT

    # Use these ports on our container.
    EXPOSE $PORT 9229 9230
    
    # Run commands on the command line using the 'node' user
    RUN npm i npm@latest -g
    RUN mkdir /home/node/app
    WORKDIR ./home/node/app
    RUN chown node:node ./
    USER node
    COPY package.json package-lock.json index.js ./
    RUN npm install --no-optional && npm cache clean --force
    CMD ["npm", "run", "dev"]
    ```
    - `ARG` and `ENV` set environmental variables
        - we use these to pass info to Docker
        - similar to using .env files, but these get committed to Git
    - `EXPOSE` tells Docker to listen on these virtual ports
        - doesn't open them on the server, just on our container
    - `RUN` allows us to issue command line commands when our container is created
- Add `public_html/Dockerfile`
    ```dockerfile
    FROM nginx:alpine
    WORKDIR /usr/share/nginx/html
    RUN rm -rf *
    ```
    - runs our nginx webserver
- Add `docker-compose.yml`
    ```yaml
    version: "3"
    services:
      backend:
        build: ./src
        container_name: "backend"
        env_file:
          - ./src/.env
      frontend:
        container_name: 'frontend'
        build: ./public_html
        ports:
          - "80:80"
        volumes:
          - ./default.conf:/etc/nginx/conf.d/default.conf
          - ./public_html:/usr/share/nginx/html
    ```
    - Both frontend and backend containers
        - This is why two Dockerfiles
- Remove `require('dotenv').config()` from src/index.html
    - This is extraneous config that will collide with our docker config
- Add `default.conf`
  ```
  server {
    listen      80;
    listen [::]:80;
    server_name arlo.meow;
    location /apis/ {
      proxy_pass http://backend:4200;
        proxy_redirect     off;
      proxy_set_header   Host $host;
      proxy_set_header   X-Real-IP $remote_addr;
      proxy_set_header   X-Forwarded-For $proxy_add_x_forwarded_for;
      proxy_set_header   X-Forwarded-Host $server_name;
    }
    location ~ /.well-known/acme-challenge {
      allow all;
      root /usr/share/nginx/html;
    }
    location / {
      root /usr/share/nginx/html;
      index index.html index.htm;
    }
  }
  ```
- Deploy your site to your droplet
- ssh into your droplet using terminal/PuTTY
- cd into your project and run `docker compose up --build`

## Preparing for https
- Go to Google ReCAPTCHA and add your domain
- Update your form action to `"./apis"`
    - `<form id="contact" action="./apis/" method="post" novalidate>`
    - Webstorm will complain, but this is okay - this only exists on our server, not locally
- Upload your files using the deployment again
  