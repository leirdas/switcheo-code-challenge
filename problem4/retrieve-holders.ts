import { ethers } from 'ethers';

// connection url
const URL = 'https://bsc-dataseed.binance.org/';
// contract address of SWTH token
const CONTRACT_ADDRESS = '0xc0ecb8499d8da2771abcbf4091db7f65158f1468';
// provider for binance smart chain network
const PROVIDER = new ethers.providers.JsonRpcProvider(URL);
// addresses to look up
const ADDRESSES = [
    '0xb5d4f343412dc8efb6ff599d790074d0f1e8d430',
    '0x0020c5222a24e4a96b720c06b803fb8d34adc0af',
    '0xd1d8b2aae2ebb2acf013b803bc3c24ca1303a392'
];
// abi
const ABI = [
    "function balanceOf(address owner) view returns (uint256)",
    "function decimals() view returns (uint8)"
];
// contract 
const CONTRACT = new ethers.Contract(CONTRACT_ADDRESS, ABI, PROVIDER);

async function main() {
    const decimal_places = await CONTRACT.decimals();
    for (const address of ADDRESSES) {
        const bal = await CONTRACT.balanceOf(address);
        const formattedBal = ethers.utils.commify(ethers.utils.formatUnits(bal, decimal_places));
        console.log(`${address} ${formattedBal}`);
    }
}

main()