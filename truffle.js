const HDWalletProvider = require("truffle-hdwallet-provider");
const mnemonic = "worry segment duck entire beyond myth flavor region over foam display meat";
const infuraEndpoint = "https://rinkeby.infura.io/v3/b1674fa834bb44f289ffc746f7390a8f";

module.exports = {
    networks: {
        development: {
            host: '127.0.0.1',
            port: 8545,
            network_id: "*",
            gas: 6721975,
			},
        rinkeby: {
            host: "localhost",
            provider: () => new HDWalletProvider(mnemonic, infuraEndpoint),
            network_id: 4,
            gas: 6721975,
            gasPrice: 20000000000,
			},
		},
    solc: {
        optimizer: {
            enabled: true,
            runs: 200
        }}		
};
