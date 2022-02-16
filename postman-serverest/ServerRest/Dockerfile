FROM node:lts-alpine3.12@sha256:60ef0bed1dc2ec835cfe3c4226d074fdfaba571fd619c280474cc04e93f0ec5b as base

LABEL repository="https://github.com/ServeRest/ServeRest" \
      homepage="https://github.com/ServeRest/ServeRest" \
      maintainer="Paulo Gonçalves <https://www.linkedin.com/in/paulo-goncalves/>"

WORKDIR /app

COPY package*.json ./

FROM base as test

ENV NODE_ENV=serverest-test

RUN apk --no-cache add git=2.32.0-r0 ca-certificates=20191127-r5 wget=1.21.1-r1 bash=5.1.4-r0 \
  && wget -q -O /etc/apk/keys/sgerrand.rsa.pub https://alpine-pkgs.sgerrand.com/sgerrand.rsa.pub \
  && wget -q https://github.com/sgerrand/alpine-pkg-glibc/releases/download/2.29-r0/glibc-2.29-r0.apk \
  && apk --no-cache add glibc-2.29-r0.apk \
  && rm -rf /var/cache/apk/*

# hadolint ignore=DL3059
RUN npm ci

COPY . .

FROM base as dev

ENV NODE_ENV=serverest-development
ENV USERNAME='docker'
ENV TERM=xterm-256color

RUN npm ci

COPY . .

EXPOSE 3000

CMD [ "npm", "run", "dev" ]

FROM base as prod

RUN npm ci --production --ignore-scripts

COPY . .

ENV USERNAME='docker'

ENV TERM=xterm-256color

EXPOSE 3000

ENTRYPOINT [ "npm", "start", "--" ]
