function shortenEthereumAddress(address, length = 6) {
    if (!address || typeof address !== 'string' || !address.startsWith('0x') || address.length !== 42) {
        throw new Error('Invalid Ethereum address');
    }

    const prefix = address.substring(0, 2 + length);
    const suffix = address.substring(address.length - length);

    return `${prefix}...${suffix}`;
}

module.exports = {
    shortenEthereumAddress
};
