FROM node:4-slim

#RUN npm install express

RUN npm install express@4.17.2
#    redi@0.1.0 \
RUN npm install redis@3.1.2

FROM scratch
COPY --from=0 / /

