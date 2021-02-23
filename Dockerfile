FROM node:lts

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY --chown=node:node package*.json ./

# RUN rm package-lock.json
RUN npm i -g @nestjs/cli

RUN npm i
# RUN npm run build
# If you are building your code for production
# RUN npm ci --only=production
RUN npm cache clean --force

# Bundle app source
COPY . .

EXPOSE 13000
CMD [ "npm", "run","start:dev" ]