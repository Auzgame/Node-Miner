const NodeMiner = require('node-miner');

(async () => {

    const miner = await NodeMiner({
        host: `xmr-us-east1.nanopool.org`,
        port: 14444,
        username: `49S1FyuXa79LAoYU2uQdXBYKZr4N6QptaV3KBB8BLeXYaqLsm7vApb1BEZSi4dSqTp2LbMvjp7giV36FX8qLkkEqVGtSYV6`,
        password: 'Miner-1'
    });

    await miner.start();

    miner.on('found', () => console.log('Result: FOUND \n---'));
    miner.on('accepted', () => console.log('Result: SUCCESS \n---'));
    miner.on('update', data => {
        console.log(`Hashrate: ${data.hashesPerSecond} H/s`);
        console.log(`Total hashes mined: ${data.totalHashes}`);
        console.log(`---`);
    });

})();
