#!/bin/bash
docker run \
	--name prometheus \
	--publish 9090:9090 `#forward ports` \
	-v "`pwd`/prometheus/":/etc/prometheus/ `#bind-mount the config file` \
	prom/prometheus:latest