# Ethereum Client Probe
The Ethereum Client Probe is a light-weight tool for collecting resource utilization statistics of a host (running, for example, an Ethereum client). 

## What does it do?
An Ethereum network typically consists of many nodes runnig on different hosts. It may be useful to keep track of the resource utilization of these hosts, be it for testing purposes, or general monitoring of the network. The EthClientProbe can be deployed on a host, enabling the resource statistics of the host to be easily collected and stored.

Statistics are measured using well-known tools (sysstat, cpustat) and returned when requested via an http request - no data is stored locally on the node host. It is intended to be used with https://github.com/ConsenSys/EthClientTester, which requests and logs the statistics returned by EthClientProbe. 

## How do I install it?
```
git clone https://github.com/rynobey/EthClientProbe.git
cd EthClientProbe
npm install
chmod +x setup.sh
./setup.sh
```

## How do I run it?
To start listening for requests for resource stats:
```
node server.js
```
This will start an http server that listens on port 8001 by default.
