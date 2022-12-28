require('dotenv').config();
const axios = require('axios');
var Web3 = require('web3');
const {rental_abi} = require('./abi');

const rentalContractAddress = "0x8a01c21d7930af53D349717b198AF9238f0020E5"
const URL = "https://goerli.infura.io/v3/bf258c084e594e6ab866988363c31bf1";
const web3Pro = new Web3(new Web3.providers.HttpProvider(URL));

const RentalContract = new web3Pro.eth.Contract(rental_abi, rentalContractAddress);

const callApi = (num) => {
    axios.post('http://localhost:8000/api/updateRewards', {init: num}).then((data) => {
        console.log(data.data);
    }).catch((err) => {console.log(err)})   
    console.log(num) 
}

module.exports.updateRewards = async () => {
    const currentRewardId = await RentalContract.methods.getCurrentRewrdId().call().catch((err) => {
        console.log(err)
        return res.status(400).send({Error: err})})
    for (i = 1; i <= currentRewardId; i+=5) {
        callApi(i)
    }
}