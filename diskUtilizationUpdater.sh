#!/bin/bash

loop=true

cleanup() {
  loop=false
  rm diskUtilization.tmp
  rm diskUtilization.tmp.tmp
  exit 0;
}

trap cleanup SIGINT SIGTERM

while $loop
do
  iostat -yx -g ALL 5 1 > diskUtilization.tmp.tmp
  cat diskUtilization.tmp.tmp > diskUtilization.tmp
done
