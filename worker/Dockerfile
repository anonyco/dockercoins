FROM python:alpine3.15

RUN pip3 install redis Flask requests

FROM scratch
COPY --from=0 / /
