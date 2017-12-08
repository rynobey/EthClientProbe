#!/bin/bash
num_cpus=`lscpu | grep "CPU(s)" | head -1 | awk '{print $2}'`
memTot=`free -k | head -2 | tail -1 | awk '{print $2}'`
cpu_utilization=`cat cpuUtilization.tmp | tail -2 | awk '{print $1}'`
loadavg_1m=`cat /proc/loadavg | awk '{print $1}'`
memAvail=`free -k | head -2 | tail -1 | awk '{print $7}'`
iowait=`cat diskUtilization.tmp | head -4 | tail -1 | awk '{print $4}'`
await=`cat diskUtilization.tmp | tail -2 | head -1 | awk '{print $10}'`
svctm=`cat diskUtilization.tmp | tail -2 | head -1 | awk '{print $13}'`
kBps_read=`cat diskUtilization.tmp | tail -2 | head -1 | awk '{print $6}'`
kBps_wrtn=`cat diskUtilization.tmp | tail -2 | head -1 | awk '{print $7}'`
if [ "$#" == 1 ]
then
  chaindata=`du -c $1 | tail -1 | awk '{print $1}'`
  statsTimestamp=`date +%s%N | cut -b1-13`
  printf "$statsTimestamp,$num_cpus,$memTot,$cpu_utilization,$loadavg_1m,$memAvail,$iowait,$await,$svctm,$kBps_read,$kBps_wrtn,$chaindata"

else
  timestamp=`date +%s%N | cut -b1-13`
  printf "$statsTimestamp,$num_cpus,$memTot,$cpu_utilization,$loadavg_1m,$memAvail,$iowait,$await,$svctm,$kBps_read,$kBps_wrtn"
fi
