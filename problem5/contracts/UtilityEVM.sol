//SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

interface IERC20 {
    function balanceOf(address account) external view returns (uint256);
}

contract UtilityEVM {
    struct TokenBalance {
        address token;
        uint256 balance;
    }

    function getBalances(
        address wallet,
        address[] memory tokens
    ) external view returns (TokenBalance[] memory) {
        TokenBalance[] memory balances = new TokenBalance[](tokens.length);
        for (uint256 i = 0; i < tokens.length; i++) {
            uint256 tokenBal = IERC20(tokens[i]).balanceOf(wallet);
            balances[i] = TokenBalance(tokens[i], tokenBal);
        }
        return balances;
    }
}
