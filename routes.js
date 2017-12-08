const config = require('./config.js');
const { execSync } = require('child_process');

module.exports = function(app) {
  app.get('/', function(req, res) {
    let requestReceivedTimestamp = Date.now();
    let requestTimestamp = 0;
    if (req.query.requestTimestamp) {
      requestTimestamp = req.query.requestTimestamp;
    }
  
    let hostStats = execSync('./hostStats.sh ' + config.blockchainData);
    let hostStatsArr = hostStats.toString().split(',');
  
    let responseObj = {
      requestTimestamp: requestTimestamp,
      requestReceivedTimestamp: requestReceivedTimestamp,
      responseTimestamp: Date.now(),
      statsTimestamp: hostStatsArr[0],
      numCpus: hostStatsArr[1],
      memkBTot: hostStatsArr[2],
      utilization: hostStatsArr[3],
      loadAvg1m: hostStatsArr[4],
      memkBAvail: hostStatsArr[5],
      iowait: hostStatsArr[6],
      await: hostStatsArr[7],
      svctm: hostStatsArr[8],
      diskkBpsRead: hostStatsArr[9],
      diskkBpsWrite: hostStatsArr[10]
    }

    if (hostStatsArr.length == 12) {
      responseObj.chaindataSizekB = hostStatsArr[11];
    }
  
    res.send(responseObj);
  });
}
