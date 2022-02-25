# dockercoins

To run in cloud9:

```sh
git clone https://github.com/anonyco/dockercoins
cd dockercoins
git checkout anonyco
source ./deploy-cloud9
```

To run anywhere in the Linuxverse:

```sh
git clone https://github.com/anonyco/dockercoins
cd dockercoins
git checkout anonyco
./deploy-generic
```

Use `./deploy-cloud9` if in that environment to autoinstall needed packages without manual intervention.

To build and upload:

```sh
./build-and-push
```

To run/deploy:

```sh
docker swarm init
docker stack deploy --compose-file docker-compose.yaml DOCKERCOINS
```



