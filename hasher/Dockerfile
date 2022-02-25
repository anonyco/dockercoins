FROM ruby:alpine3.15

RUN apk add build-base

RUN gem install sinatra thin

RUN apk del build-base

FROM scratch
COPY --from=0 / /
