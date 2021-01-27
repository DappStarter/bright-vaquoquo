require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give nation flush special drift robot magic concert hunt merry forward genius'; 
let testAccounts = [
"0x155f7e4fed1fc85588f03ba6df1045049485dc6068874c955f26f1debc1953ce",
"0xdf6982071c56018d5fed798ef412b1844de2864d08c0a24f013e404864267daf",
"0x7e26cc005166a061fcdf50b140ced64c1a860fa1d11f0900eee1d1109c7d567d",
"0x961f4959eefd0af706ac899c8269fabe3fcce21e5f6175dd0f30887839d755a5",
"0x02abbd29f017e767a56702094d85ccd0c0c03374dfeae518023dcc2388c7cb4b",
"0xedde5db013b516789938380f8695e8b61c31e2db610231cba81411d8819b7ec1",
"0x32135400b62124c4a6cff5d3e5882a426195e4dbedd1f7585892a16eedfeecec",
"0x740b0a5abb02d059d9ea4ff11462d761a096a10c098a1dd9ac7fb6510c0d4842",
"0x1b1c6f1c36484110f5b24ac203088e3a155edf4c8f617268127c156bba7df820",
"0x53bcacdb0f0226361796968ffd019d8025c9113f4b86c24dc1475f8d3be5382c"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
