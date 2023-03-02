docker run -d -p 3000:3000 grafana/grafana-oss
# username and password are "admin".
# go to settings > data sources > prometheus > add http://$(ip address show dev docker0 | grep -Po "(?<=inet ).*(?=/[0-9][0-9] brd.+)"):9090
# go to explore and enter node_hwmon_temp_celsius
