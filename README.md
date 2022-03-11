# dockercoins

To run in cloud9:

```sh
git clone https://github.com/anonyco/dockercoins
cd dockercoins
git checkout anonyco
source ./tools/deploy-cloud9
```

To run anywhere in the Linuxverse:

```sh
git clone https://github.com/anonyco/dockercoins
cd dockercoins
git checkout anonyco
./tools.deploy-generic
```

Use `./tools/deploy-cloud9` if in that environment to autoinstall needed packages without manual intervention.

To build and upload:

```sh
./tools/build-and-push
```

To run/deploy:

```sh
sudo docker swarm init
sudo docker stack deploy --compose-file docker-compose.yaml DOCKERCOINS
```

To take down: `docker stack rm DOCKERCOINS`

# Testing commands:

Test hasher:

```sh
docker run --rm --name hasher --network hasher -v "$PWD/hasher/hasher.rb:/hasher.rb" -p 8080:8080 -e HASHER_PORT=8080 --entrypoint ruby jackanonyco/dockercoins-hasher /hasher.rb
```

To nuke everything:

```sh
docker rm -f "$(docker ps -q)"
docker rmi -f "$(docker images -q)"
```

# iptables

1. List: `sudo iptables -S` (better yet, `sudo iptables -S -t nat`)
2. Refresh (clear out session): `sudo iptables -t nat -F` and `sudo systemctl restart docker.service`


