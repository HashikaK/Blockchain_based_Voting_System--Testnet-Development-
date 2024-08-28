/**
* @type import('hardhat/config').HardhatUserConfig
*/

require('dotenv').config();
require("@nomiclabs/hardhat-ethers");

const { API_URL, PRIVATE_KEY } = process.env;

module.exports = {
   solidity: "0.8.24",
   networks: {
      hardhat: {},
      sepolia: {
         url: "https://sepolia.infura.io/v3/e03d5c0b6fd24ea49349baabe8145e89",
         accounts:['13b29354071c5ad2bcbb1967743173abd49e56582082e945bffc8f6c8a02f7ae'],
      },
       
         
   },
}
