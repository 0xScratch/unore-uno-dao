// Defining bytecode and abi from original contract on mainnet to ensure bytecode matches and it produces the same pair code hash
// We will use this for collateral asset in rinkeby test
module.exports = async function ({ ethers, getNamedAccounts, deployments, getChainId }) {
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();

  await deploy('Ownership', {
    from: deployer,
    log: true,
    args: [],
    deterministicDeployment: false
  });
};

module.exports.tags = ['Ownership', 'UnoDao'];
