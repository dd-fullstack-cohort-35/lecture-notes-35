# Intro to Docker, Images, and Containers

## Docker
Tool designed to create, deploy and run applications using containers and images
- Old way of doing things: build a full server for each environment you want to run
    - expensive, resource-intesive, and slow
- New way: use containers to build small application servers that are
    - self-contained - have everything you need to spin up a new environment
    - bite-sized - Images are a fraction of a normal Virtual Machine (VM)
    - portable - a Docker image can be used on any computer that has docker installed
    - efficient - multiple containers that use the same functionality can share it rather than needing to each take server resources
- Docker ultimately uses a single slice of a computer and runs only what's in that slice
- Good for Continuous Integration/Continuous Delivery (CI/CD)
- Enables an easy way to host development environments and deploy your app
    - Dev, staging/QA (Quality Assurance), production
    - Related: Microsoft Azure, Google Cloud Platform, Kubernetes, Amazon Web Services (AWS), Docker Swarm
- Integrates well with "The Cloud" because it is very portable and hardware independent
    - **the cloud** - a physical computer, but somewhere else

## Images
Images are the blue prints for containers
-  Images are created by writing Dockerfiles.
-  Describes the kind of computer slice you want to use
-  Describes what to install on that computer slice
-  Lists other set up
-  Images can be built on other images
-  Creates a rubber stamp for your containers

## Containers
containers are mini Virtual Machines running in isolation
- Images are used to spin up any number of containers.
- Is not a running computer
- Running a container from an image uses the image's Dockerfile to spin up mini virtual machine
- Meant to be ephemeral/short-lived
- Easy to take up and down
- Can be SSH'd into
- Can run an entire application
- Container orchestration

## Docker in-class demonstration
Follow the instructions at https://github.com/Deep-Dive-Coding-Fullstack-Licensing/docker-intro
