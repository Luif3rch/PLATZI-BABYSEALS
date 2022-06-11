import CollectionConfigInterface from '../lib/CollectionConfigInterface';
import * as Networks from '../lib/Networks';
import * as Marketplaces from '../lib/Marketplaces';
import whitelistAddresses from './whitelist.json';

const CollectionConfig: CollectionConfigInterface = {
  testnet: Networks.AlfajoresTestnet,
  mainnet: Networks.CeloMainnet,
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: 'BabySeals',
  tokenName: 'BabySeals',
  tokenSymbol: 'BS',
  hiddenMetadataUri: 'https://ipfs.io/ipfs/QmTJKqRnMHqf2NtmYKEcHfKvQg28cRfvdiBzAjk1qawsJA/',
  maxSupply: 100, /// LOS NFT GENERADOS
  whitelistSale: {
    price: 0.1,
    maxMintAmountPerTx: 1,
  },
  preSale: {
    price: 0.2,
    maxMintAmountPerTx: 2,
  },
  publicSale: {
    price: 0.3,
    maxMintAmountPerTx: 5,
  },
  contractAddress: "0x648B5b5CEd33b4CDBa10d9aa059FffA8156085B6",
  marketplaceIdentifier: 'my-nft-token',
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
};

export default CollectionConfig;
