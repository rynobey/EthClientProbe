#!/bin/bash
memAvail=`free -k | head -2 | tail -1 | awk '{print $7}'`
memTot=`free -k | head -2 | tail -1 | awk '{print $2}'`
timestamp=`date +%s%N | cut -b1-13`
printf "$timestamp,$memAvail,$memTot"
