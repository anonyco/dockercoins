FROM node:4-slim

RUN npm install express@4.17.2

RUN npm install redis@3.1.2

COPY files/ /webui/files/

FROM scratch
COPY --from=0 / /
