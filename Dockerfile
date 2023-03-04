### Install the dependencies
FROM node:16 AS deps
WORKDIR /usr/src

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

### Build the code
FROM deps AS builder
WORKDIR /usr/src
COPY . .
RUN yarn storybook:build

### run the code
FROM nginx:alpine AS runner
WORKDIR /usr/share/nginx/html
COPY --from=builder /usr/src/storybook-static .
COPY --from=builder /usr/src/nginx.conf /etc/nginx/conf.d/default.conf