# uSelf Issuer GUI

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.10.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Build image

In order to build the image we will need first to execute

```bash

docker buildx create --use
docker build  -t registry.atosresearch.eu:18487/eviden/rd/uself/uself-pid-generator:v0.0.1 .
docker buildx build --platform linux/amd64,linux/arm64 --push -t registry.atosresearch.eu:18487/eviden/rd/uself/uself-pid-generator:v0.0.1 .
#DC4EU
docker buildx build --platform linux/amd64,linux/arm64 --push -t ossdc4eu.urv.cat:8081/eviden/rd/uself/uself-pid-generator:v0.0.1 .

```

## Download the image

docker pull registry.atosresearch.eu:18487/eviden/rd/uself/uself-agent-gui:v0.0.1

### Starting Parameters Configuration

In order to test this component it is necessary to set up the connection to the uself-agent using the following parameter: USELF_AGENT_URL

An example of how to use it is as follows:

```bash

docker run -p 9090:80 registry.atosresearch.eu:18487/eviden/rd/uself/uself-pid-generator

docker run -p 9090:80 -e USELF_AGENT_URL=http://192.168.1.49:8888 registry.atosresearch.eu:18487/eviden/rd/uself/uself-pid-generator
```

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
docker run -p 9090:80 registry.atosresearch.eu:18487/eviden/rd/uself/uself-pid-generator
