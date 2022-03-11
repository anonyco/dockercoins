FROM redis:6.2-alpine3.15

#COPY redis.conf /etc/redis.conf

#CMD ["redis-server", "/etc/redis.conf"]

FROM scratch
COPY --from=0 / /

