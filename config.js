var config = {}

// http server listening port
config.port = 8010;

// local stats update time (itime over which stats will be averaged) in seconds
config.period = 5;

/* directory where blockchain data is stored (typically geth/chaindata). Needs
   to be an absolute path, or a relative path from where the probe is run.
*/   
config.blockchainData = '../QuorumNetworkManager/Blockchain/geth/chaindata/';

module.exports = config;
