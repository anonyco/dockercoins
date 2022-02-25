FROM python:alpine3.15

RUN pip3 install Flask

FROM scratch
COPY --from=0 / /
