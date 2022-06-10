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
  hiddenMetadataUri: 'ipfs://Qmed8VTxcTgZ4UPFeCUqFHgADdN8dH7F7ZN6eiHVHETmiY/hidden.json',
  maxSupply: 60, /// LOS NFT GENERADOS
  whitelistSale: {
    price: 0.5,
    maxMintAmountPerTx: 1,
  },
  preSale: {
    price: 0.7,
    maxMintAmountPerTx: 2,
  },
  publicSale: {
    price: 1,
    maxMintAmountPerTx: 5,
  },
  contractAddress: "0x97896Bf38428B9a54f63C9Ce78d21FbEEdDa4B67",
  marketplaceIdentifier: 'my-nft-token',
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
};

export default CollectionConfig;
