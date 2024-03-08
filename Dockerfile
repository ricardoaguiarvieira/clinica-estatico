#FROM docker-registry.default.svc:5000/openshift/nodejs-12:1-102.1638363923
#FROM registry.redhat.io/rhel8/nodejs-12
#FROM registry.redhat.io/rhel8/nodejs-12:1-104
#FROM docker-registry-default.app.detran.df/openshift/node14:latest
FROM image-registry.openshift-image-registry.svc.cluster.local:5000/openshift/nodejs:14-ubi8

ARG CAMINHO=""

ENV NG_CLI_ANALYTICS=ci
WORKDIR /usr/src/app

RUN mkdir /usr/src/app/temp
COPY . /usr/src/app/temp

RUN cp /usr/src/app/temp/${CAMINHO}/package-lock.json /usr/src/app/
RUN cp /usr/src/app/temp/${CAMINHO}/package.json /usr/src/app/

RUN cp -Rf /usr/src/app/temp/${CAMINHO}/* /usr/src/app/

RUN npm install -g express && \
    npm install -g @angular/cli && \
    npm install
    



#COPY . .
#RUN npm run build:desenv
#RUN npm run build:homol

ENV DISABLE_ESLINT_PLUGIN true

RUN npm run build:prod
EXPOSE 8080
CMD ["node", "app.js"]

#FROM build as desenv
#RUN npm run build:desenv
#RUN node app.js
#EXPOSE 8081
#
#FROM build as homol
#RUN npm run build:homol
#RUN node app.js
#EXPOSE 8081
#
#FROM build as prod
#RUN npm run build:prod
#RUN node app.js
#EXPOSE 8081