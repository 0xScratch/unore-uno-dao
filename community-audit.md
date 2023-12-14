# Docs for UNO DAO Contracts 


### Vote Escrow Contract 

Put here the link to the initial source contracts from crv docs, add diff logs if any
Users deposit Uno tokens in this contract and get voting power on the basis of deposit amount and lock period. Uno token depositors in voting escrow can yield reward from VeUnoYielDistributor. 
Reference: 
https://github.com/curvefi/curve-dao-contracts/blob/master/contracts/VotingEscrow.vy


### veUNO Yield Distributor

The purpose of the contract is to provide inflationary token rewards to our community members for token locks upto 4 years. The rationale behind this implementation is that the insurance premium/fees generated by the protocol is being used to buyback and burn $UNO tokens over time in regular intevals. 

What it does? what are the key functions and params definitions?
Main invariant checks to be done? 
Specifically mention the onlyByOwnGov how its operated via contract, etc. 


### Resolver 

Its primarily a contract which allows us to allow epoch renewals for our existing veUNO holders providing a consistent state of returns in the form of APY. Even though this APY calculation is not very straightforward due to the decay implementation its a close enough approximation.

What it does? what are the key functions and params definitions?
Main invariant checks to be done? 

For each contracts try to write some basic invariant conditions which needs to be held true:
This can include function-level invariants that must hold with respect to the execution of the function (e.g., addition is commutative) or system-level invariants (e.g., the balance of a user cannot be greater than the total supply). We will specify the invariants in English and identify their pre-conditions (e.g., a parameter is within a given bound).


### Gnosis Safe Contracts 

Mention its purpose, version of contracts, usage of UI for latest version, etc. 

Used as a multisig, multiple EOA account sign proposal to execute transaction
Used in SSIP-SSRP to kill and pause pool, which deprecates functions.
Used as timelock address in VeUnoDaoYieldDistributor contract to
- Recover ERC20 token 
- Set yieldDuration 
- Toggle Greylist
- Toggle RewardNotifier
- Set pause 
- Set yield rate
- Set time lock 
version of contracts  >=0.7.0 <0.9.0;

Reference:
doc: https://app.safe.global/welcome
Github: https://github.com/safe-global/safe-contracts/tree/main/contracts


# Audit Specs

Put the full scope of audit here all the contracts that needs to be audited with nSLOC (sloc without comments)

### Owned contract

Implement Owned contract instead of using Openzepplin's Ownable library similar to Ownable2Step
Used for security in contract to check caller is owner, change nominate new owner and accept ownership
Used in VeUnoDaoYieldDistributor and Resolver contract 


### VeUnoDaoYieldDistributor

- Import latest version contract from openzepplin
- Update state, function and its parameters naming convention
- Remove SafeMath, and update operations according to solidity pragma - - - version > 0.8.0
- Update implementation of function where emitted_token_address variable is used
- Use Openzepplin's SafeTransfer library for secure transfer of ERC20
- Take _user param in notifyRewardAmount function, and update logic accordingly
- Remove assignment of public state variables to default values
- Update state, mapping from private to public
- Implement Owned contract instead of using Openzepplin's Ownable library similar to Ownable2Step
- Add checker function in Resolver to notifyAmount to  yieldDistributor instead of execNotifyReward for Gelato automation


### IVeUnoDaoYieldDistributor

Interface to interact with VeUnoDaoYielDistributor, add lastUpdateTime function 


### Template of reporting a Vulnerability/Issue:

Please make sure to raise an issue on the GitHub repo as soon as you find any issues as the bounties are reserved on a First come first serve basis. Also it’s a shared repo between all the auditors who are engaging in the audit, so please do keep that in mind during reporting issues. There are a total of 3 auditors who are working on this contest. 

While reporting issues The Title / Name of the issue should be of the format:
```
[X-YY] Title of the issue
where X can be C for critical, H for high, M for medium, L for low , I for informational. YY indicates the issue number
```

The content of the issue should be in below format:
```
Body/Content of the Issue
Severity (Information/Low/Medium/High/Critical)
Description of Vulnerability Details
Impact
Recommended fix
```

### Template for reporting a Gas optimization Issue:
```
Title of the issue
Gas Saved (across all instances)
Description
Recommended Fix
```


### Make sure following exclusions and standards are kept in mind while reporting issues:
```
a. User input validation to prevent user mistakes is not considered a valid issue. However, if a user input could result in a major protocol malfunction or significant loss of funds could be a valid high. 
b. Admin / Owner / Centralization risks would be only be classified with a maximum of Medium Risk as they are treated as trusted parties in most cases.
c. Use of call vs transfer with the reasoning that the gas price may not be the same value of 2300. This will be considered as a protocol choice and would be considering this issue in the low/informational category. 
d. Users sending ETH/native tokens accidentally just because a contract allows is not a valid medium/high.
```

### The Vulnerability bounty payments are as follows:
```
  a. XXXX USD for each critical issue discovered, causing a significant loss of user funds.
  b. XXX USD for each high issue discovered, causing a significant loss of user funds.
  Total Bounty max cap - XXXX USDT
```