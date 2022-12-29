require('dotenv').config();
const axios = require('axios');
var Web3 = require('web3');
const {rental_abi} = require('./abi');

const rentalContractAddress = "0x21C048bdf79ED3E7A9EedF5a17A8eCD206E430a1"
const URL = "https://eth-goerli.g.alchemy.com/v2/XvCWKtxc5r_re6uSpNMlqiBDcy5DK-oj";
const web3Pro = new Web3(new Web3.providers.HttpProvider(URL));

const RentalContract = new web3Pro.eth.Contract(rental_abi, rentalContractAddress);

const callApi = (num, rewId) => {
    axios.post('https://rental-api-d5ih3.ondigitalocean.app/api/updateRewards', {init: num, rewardId: rewId}).then((data) => {
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