FROM node as reactBuilder

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY client/package*.json ./

RUN npm ci

COPY client .

RUN npm run build

FROM node as expressBuilder

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY api/package*.json ./

RUN npm ci

COPY api .

RUN npm run build

FROM node:slim

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY api/package*.json ./

RUN npm ci --production

COPY --from=expressBuilder /usr/src/app/build ./build
COPY --from=reactBuilder /usr/src/app/build ./client/build

EXPOSE 8080
CMD [ "node", "build/src/index.js" ]
