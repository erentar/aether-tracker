from random import random,randint
def prometheusFormattedMockData():
    return(f"""altitude {random()*randint(0,100e3)}
latitude {random()*randint(0,90)}
longitude {random()*randint(-180,180)}
""")

#import socket #can be removed if local ip is set manually
#LOCAL_IP = socket.gethostbyname(socket.gethostname())
LOCAL_IP = os.popen("ip a show docker0 | grep -Po \"(?<=inet ).*(?=/.* brd.*)\"").read().rstrip("\n")
PORT = 8000

import http.server
class requestHandler(http.server.BaseHTTPRequestHandler):
    def do_GET(self):
        #response headers
        self.send_response(200)
        self.send_header("Content-type", "text/plain")
        self.end_headers()
        self.wfile.write(bytes(prometheusFormattedMockData(),"utf-8"))
        self.flush_headers()

print(f"visit http://{LOCAL_IP}:{PORT}")
http.server.HTTPServer((LOCAL_IP,PORT),requestHandler).serve_forever()