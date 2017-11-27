const config = require('./config.js');
const { execSync } = require('child_process');

module.exports = function(app) {
  app.get('/', function(req, res) {
    let requestReceivedTimestamp = Date.now();
    let requestTimestamp = 0;
    if (req.query.requestTimestamp) {
      requestTimestamp = req.query.requestTimestamp;
    }
  
    let cpuStats = execSync('./cpuStats.sh');
    let cpuStatsArr = cpuStats.toString().split(',');
    let memStats = execSync('./memStats.sh');
    let memStatsArr = memStats.toString().split(',');
    let diskStats = execSync('./diskStats.sh ' + config.blockchainData);
    let diskStatsArr = diskStats.toString().split(',');
  
    let responseObj = {
      requestTimestamp: requestTimestamp,
      requestReceivedTimestamp: requestReceivedTimestamp,
      responseTimestamp: Date.now(),
      cpuStats: {
        timestamp: cpuStatsArr[0],
        numCpus: cpuStatsArr[1],
        utilization: cpuStatsArr[2],
        loadAvg1m: cpuStatsArr[3],
        loadAvg5m: cpuStatsArr[4],
        loadAvg15m: cpuStatsArr[5]
      },
      memStats: {
        timestamp: memStatsArr[0],
        kBAvailable: memStatsArr[1],
        kBTotal: memStatsArr[2]
      },
      diskStats: {
        timestamp: diskStatsArr[0],
        iowait: diskStatsArr[1],
        await: diskStatsArr[2],
        svctm: diskStatsArr[3],
        kBpsRead: diskStatsArr[4],
        kBpsWrite: diskStatsArr[5]
      }
    }
  
    res.send(responseObj);
  });
}
