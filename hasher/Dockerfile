FROM ruby:alpine3.15

RUN gem install sinatra thin

FROM scratch
COPY --from=0 / /
