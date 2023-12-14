// SPDX-License-Identifier: MIT

pragma solidity =0.8.23;

contract SmartWalletCheckerMock {
    function check(address) external view returns (bool) {
        return true;
    }
}
