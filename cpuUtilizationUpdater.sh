#!/bin/bash

loop=true

cleanup() {
  loop=false
  rm cpuUtilization.tmp
  rm cpuUtilization.tmp.tmp
  exit 0;
}

trap cleanup SIGINT SIGTERM

while $loop
do
  cpustat -sT 5 1 > cpuUtilization.tmp.tmp
  cat cpuUtilization.tmp.tmp > cpuUtilization.tmp
done
