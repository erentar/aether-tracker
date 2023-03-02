docker run \
	-p 9090:9090 \
	-v "$(realpath prometheus.yml)":/etc/prometheus/prometheus.yml \
	prom/prometheus
