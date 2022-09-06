const e=[{anonymous:!1,inputs:[{indexed:!1,internalType:"uint256",name:"vaultId",type:"uint256"},{indexed:!1,internalType:"address",name:"vaultAddress",type:"address"},{indexed:!1,internalType:"uint256",name:"borrowAmount",type:"uint256"}],name:"BorrowUSDi",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint64",name:"epoch",type:"uint64"},{indexed:!1,internalType:"uint192",name:"amount",type:"uint192"},{indexed:!1,internalType:"uint256",name:"curve_val",type:"uint256"}],name:"InterestEvent",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint256",name:"vaultId",type:"uint256"},{indexed:!1,internalType:"address",name:"asset_address",type:"address"},{indexed:!1,internalType:"uint256",name:"usdi_to_repurchase",type:"uint256"},{indexed:!1,internalType:"uint256",name:"tokens_to_liquidate",type:"uint256"}],name:"Liquidate",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint256",name:"protocol_fee",type:"uint256"}],name:"NewProtocolFee",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"vault_address",type:"address"},{indexed:!1,internalType:"uint256",name:"vaultId",type:"uint256"},{indexed:!1,internalType:"address",name:"vaultOwner",type:"address"}],name:"NewVault",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"account",type:"address"}],name:"Paused",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"curveMasterAddress",type:"address"}],name:"RegisterCurveMaster",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"oracleMasterAddress",type:"address"}],name:"RegisterOracleMaster",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"token_address",type:"address"},{indexed:!1,internalType:"uint256",name:"LTVe4",type:"uint256"},{indexed:!1,internalType:"address",name:"oracle_address",type:"address"},{indexed:!1,internalType:"uint256",name:"liquidationIncentivee4",type:"uint256"}],name:"RegisteredErc20",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint256",name:"vaultId",type:"uint256"},{indexed:!1,internalType:"address",name:"vaultAddress",type:"address"},{indexed:!1,internalType:"uint256",name:"repayAmount",type:"uint256"}],name:"RepayUSDi",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"account",type:"address"}],name:"Unpaused",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"token_address",type:"address"},{indexed:!1,internalType:"uint256",name:"LTVe4",type:"uint256"},{indexed:!1,internalType:"address",name:"oracle_address",type:"address"},{indexed:!1,internalType:"uint256",name:"liquidationIncentivee4",type:"uint256"}],name:"UpdateRegisteredErc20",type:"event"},{inputs:[],name:"_curveMaster",outputs:[{internalType:"contract CurveMaster",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"_enabledTokens",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"_interest",outputs:[{internalType:"uint64",name:"lastTime",type:"uint64"},{internalType:"uint192",name:"factor",type:"uint192"}],stateMutability:"view",type:"function"},{inputs:[],name:"_oracleMaster",outputs:[{internalType:"contract OracleMaster",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"_tokenAddress_liquidationIncentive",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"_tokenAddress_tokenId",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"_tokenId_oracleAddress",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"_tokenId_tokenLTV",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"_usdi",outputs:[{internalType:"contract IUSDI",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint96",name:"",type:"uint96"}],name:"_vaultId_vaultAddress",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"_vaultsMinted",outputs:[{internalType:"uint96",name:"",type:"uint96"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"},{internalType:"uint256",name:"",type:"uint256"}],name:"_wallet_vaultIDs",outputs:[{internalType:"uint96",name:"",type:"uint96"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint96",name:"id",type:"uint96"}],name:"amountToSolvency",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint96",name:"id",type:"uint96"},{internalType:"uint192",name:"usdc_amount",type:"uint192"},{internalType:"address",name:"target",type:"address"}],name:"borrowUSDCto",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint96",name:"id",type:"uint96"},{internalType:"uint192",name:"amount",type:"uint192"},{internalType:"address",name:"target",type:"address"}],name:"borrowUSDIto",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint96",name:"id",type:"uint96"},{internalType:"uint192",name:"amount",type:"uint192"}],name:"borrowUsdi",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"calculateInterest",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint192",name:"new_protocol_fee",type:"uint192"}],name:"changeProtocolFee",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint96",name:"id",type:"uint96"}],name:"checkVault",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"getCurveMaster",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"getOracleMaster",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"initialize",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"interestFactor",outputs:[{internalType:"uint192",name:"",type:"uint192"}],stateMutability:"view",type:"function"},{inputs:[],name:"lastInterestTime",outputs:[{internalType:"uint64",name:"",type:"uint64"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint96",name:"id",type:"uint96"},{internalType:"address",name:"asset_address",type:"address"},{internalType:"uint256",name:"tokens_to_liquidate",type:"uint256"}],name:"liquidateVault",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"mintVault",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"pause",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"paused",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"protocolFee",outputs:[{internalType:"uint192",name:"",type:"uint192"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"master_curve_address",type:"address"}],name:"registerCurveMaster",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"token_address",type:"address"},{internalType:"uint256",name:"LTV",type:"uint256"},{internalType:"address",name:"oracle_address",type:"address"},{internalType:"uint256",name:"liquidationIncentive",type:"uint256"}],name:"registerErc20",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"master_oracle_address",type:"address"}],name:"registerOracleMaster",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"usdi_address",type:"address"}],name:"registerUSDi",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint96",name:"id",type:"uint96"}],name:"repayAllUSDi",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint96",name:"id",type:"uint96"},{internalType:"uint192",name:"amount",type:"uint192"}],name:"repayUSDi",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"tokensRegistered",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint96",name:"id",type:"uint96"},{internalType:"address",name:"asset_address",type:"address"}],name:"tokensToLiquidate",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalBaseLiability",outputs:[{internalType:"uint192",name:"",type:"uint192"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"unpause",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"token_address",type:"address"},{internalType:"uint256",name:"LTV",type:"uint256"},{internalType:"address",name:"oracle_address",type:"address"},{internalType:"uint256",name:"liquidationIncentive",type:"uint256"}],name:"updateRegisteredErc20",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint96",name:"id",type:"uint96"}],name:"vaultAddress",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint96",name:"id",type:"uint96"}],name:"vaultBorrowingPower",outputs:[{internalType:"uint192",name:"",type:"uint192"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"wallet",type:"address"}],name:"vaultIDs",outputs:[{internalType:"uint96[]",name:"",type:"uint96[]"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint96",name:"id",type:"uint96"}],name:"vaultLiability",outputs:[{internalType:"uint192",name:"",type:"uint192"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint96",name:"start",type:"uint96"},{internalType:"uint96",name:"stop",type:"uint96"}],name:"vaultSummaries",outputs:[{components:[{internalType:"uint96",name:"id",type:"uint96"},{internalType:"uint192",name:"borrowingPower",type:"uint192"},{internalType:"uint192",name:"vaultLiability",type:"uint192"},{internalType:"address[]",name:"tokenAddresses",type:"address[]"},{internalType:"uint256[]",name:"tokenBalances",type:"uint256[]"}],internalType:"struct IVaultController.VaultSummary[]",name:"",type:"tuple[]"}],stateMutability:"view",type:"function"},{inputs:[],name:"vaultsMinted",outputs:[{internalType:"uint96",name:"",type:"uint96"}],stateMutability:"view",type:"function"}];var t=e;export{t as a};
