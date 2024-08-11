require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.20",
  networks: {
    swisstronik: {
      url: "https://json-rpc.testnet.swisstronik.com/",
      accounts: ["0xf4e73e5f8c6f3b18d0ab9004ada675b0a7e46254a6d06794875064b83a598321"],
    },
  },
};
