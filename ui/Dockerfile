FROM node:alpine
RUN mkdir /ui
WORKDIR /ui
COPY package.json /ui/package.json
COPY yarn.lock /ui/yarn.lock
RUN yarn
ENV PATH /ui/node_modules/.bin:$PATH
EXPOSE 5000
CMD ["yarn", "start"]