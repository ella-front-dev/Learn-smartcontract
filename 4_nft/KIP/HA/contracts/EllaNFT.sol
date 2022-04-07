pragma solidity 0.5.6;

import "@klaytn/contracts/token/KIP17/KIP17Token.sol";
import "@klaytn/contracts/drafts/Counters.sol";

contract EllaNFT is KIP17Full {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    constructor() public KIP17Full("EllaNFT", "ENFT") {}

   function mintNFT(string memory tokenURI)
        public
        returns (uint256)
    {
        _tokenIds.increment();

        uint256 newItemId = _tokenIds.current();
        _mint(msg.sender, newItemId);
        _setTokenURI(newItemId, tokenURI);

        return newItemId;
    }
}