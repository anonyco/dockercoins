FROM ruby:alpine3.15

RUN gem install sinatra

FROM scratch
COPY --from=0 / /
