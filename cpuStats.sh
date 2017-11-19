loadavg_1m=`cat /proc/loadavg | awk '{print $1}'`
loadavg_5m=`cat /proc/loadavg | awk '{print $2}'`
loadavg_15m=`cat /proc/loadavg | awk '{print $3}'`
cpu_utilization=`cat cpuUtilization.tmp | tail -2 | awk '{print $1}'`
num_cpus=`lscpu | grep "CPU(s)" | head -1 | awk '{print $2}'`
timestamp=`date +%s%N | cut -b1-13`
printf "$timestamp,$num_cpus,$cpu_utilization,$loadavg_1m,$loadavg_5m,$loadavg_15m"
