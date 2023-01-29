require('dotenv').config();
const axios = require('axios');
var Web3 = require('web3');
const {rental_abi} = require('./abi');

const rentalContractAddress = "0xca63b89db5a634ad465927ff63e0fd1495928e23"
const URL = "https://eth-mainnet.g.alchemy.com/v2/4Yu3Crvr9V7owxJ-msc99y94RTQjKEB-";
const web3Pro = new Web3(new Web3.providers.HttpProvider(URL));

const RentalContract = new web3Pro.eth.Contract(rental_abi, rentalContractAddress);

const callApi = (num, rewId) => {
    axios.post('https://rental-api.lordsofthelands.io/api/updateRewards', {init: num, rewardId: rewId}).then((data) => {
        console.log(data.data);
    }).catch((err) => {console.log(err)})   
    console.log(num) 
}

module.exports.updateRewards = async () => {
    const currentRewardId = await RentalContract.methods.getCurrentRewrdId().call().catch((err) => {
        console.log(err)
        return res.status(400).send({Error: err})})
    for (i = 1; i <= currentRewardId; i+=5) {
        callApi(i,currentRewardId)
    }
}