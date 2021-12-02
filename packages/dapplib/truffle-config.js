require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hover enroll other venture stool cruise night exchange hockey fantasy forget gaze'; 
let testAccounts = [
"0x5a1423d11a098f44f13ae0353d49758e36933931b292bbf0b1f2f6f6fe0db87c",
"0x9f2416629e101c30b44de71e3c18785e9fcc3b26a97826f9a4efd6373a731124",
"0x6f1535e97535a99f2e900d5dd883c34858731dcb61608572c96ab5e6c91587f9",
"0x9f091bd8e5f8cfc591e56181fbf3bffa7349dd18f686a9c973ef469208bb99f9",
"0xcec8c863bb8dbb3302f568a92f1ec0f462c47becc0709aa05fb58866399b32b3",
"0xf6e4634c07e4fdd5b6dbcfa561e76d00c4192018166721f8c18e60e354d47bce",
"0x0d1e0facff5f457166713bd67860b2f4f5d05d6d5792105dfdc7319f6f119b36",
"0xfe78f1d22134ce6346ad330eec3cf7a9bb822a85ac3ba15b1e85270e7c2724b6",
"0x22e039e38109112c72819d85d220efceb8fe2dd9dd60132b040dd3a89b30473d",
"0xfa09d8dedca864661212b5e0c438e2358d7679426a1ab30b51fc1969426a2ed8"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


