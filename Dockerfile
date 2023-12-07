# node version
FROM node:20

# working dir inside the container
WORKDIR /app

# copy package json and package-lock json to the container
COPY package*.json ./

# install deps (here cmds are in SHELL form)
RUN npm install

# we'll copy all the src code => copys local files and current wrkdir, but we don't need node modules to be copied again.
COPY . .

# build the Next.js app
RUN npm run build

# expose the port the app will run on 
EXPOSE 3000

# start the app (here cmds are in EXEC form)

CMD [ "npm", "start" ]