const { ethers, network, upgrades } = require("hardhat");
const { boolean } = require("hardhat/internal/core/params/argumentTypes");


async function main() {

    const governanceAddress = "";
    const governanceABI = "";
    const governance = await ethers.getContractAt(governanceABI, proxyAdminAddress);

    const aa = await ethers.getSigners();

    let proposalId;
    
    let tx = await governance.connect(aa[0]).submitVote(proposalId, true);

}

main();