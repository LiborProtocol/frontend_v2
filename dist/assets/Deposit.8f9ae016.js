import{h as M,r as b,n as f,l as T,j as t,a as e,C as n,b as a,H as s,S as p,T as y,B as r}from"./index.11c46787.js";import{a as v}from"./AbiIERC20.a932546c.js";import{a as I}from"./AbiVaultController.5b91248a.js";import{N as R,a as W,A as g,M as w,b as x,c as C,d as E,e as _,f as F}from"./chakra-ui-number-input.esm.32a28f53.js";const h=[{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"spender",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"from",type:"address"},{indexed:!1,internalType:"uint256",name:"_value",type:"uint256"}],name:"Burn",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"_from",type:"address"},{indexed:!1,internalType:"uint256",name:"_value",type:"uint256"}],name:"Deposit",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"_from",type:"address"},{indexed:!1,internalType:"uint256",name:"_value",type:"uint256"},{indexed:!1,internalType:"uint256",name:"_totalSupply",type:"uint256"}],name:"Donation",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"monetaryPolicy",type:"address"}],name:"LogMonetaryPolicyUpdated",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"epoch",type:"uint256"},{indexed:!1,internalType:"uint256",name:"totalSupply",type:"uint256"}],name:"LogRebase",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256",name:"_value",type:"uint256"}],name:"Mint",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"account",type:"address"}],name:"Paused",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Transfer",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"account",type:"address"}],name:"Unpaused",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"_from",type:"address"},{indexed:!1,internalType:"uint256",name:"_value",type:"uint256"}],name:"Withdraw",type:"event"},{inputs:[],name:"DOMAIN_SEPARATOR",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"view",type:"function"},{inputs:[],name:"EIP712_DOMAIN",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"view",type:"function"},{inputs:[],name:"EIP712_REVISION",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"MAX_SUPPLY",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"PERMIT_TYPEHASH",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"view",type:"function"},{inputs:[],name:"_VaultController",outputs:[{internalType:"contract IVaultController",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"string",name:"name_",type:"string"},{internalType:"string",name:"symbol_",type:"string"},{internalType:"uint8",name:"decimals_",type:"uint8"}],name:"__ERC20Detailed_init",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"string",name:"name",type:"string"},{internalType:"string",name:"symbol",type:"string"}],name:"__UFragments_init",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"_gonBalances",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"_gonsPerFragment",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"_pauser",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"_reserve",outputs:[{internalType:"contract IERC20",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"_totalGons",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"_totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"owner_",type:"address"},{internalType:"address",name:"spender",type:"address"}],name:"allowance",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"value",type:"uint256"}],name:"approve",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"who",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"usdc_amount",type:"uint256"}],name:"burn",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"decimals",outputs:[{internalType:"uint8",name:"",type:"uint8"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"subtractedValue",type:"uint256"}],name:"decreaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"usdc_amount",type:"uint256"}],name:"deposit",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"usdc_amount",type:"uint256"},{internalType:"address",name:"target",type:"address"}],name:"depositTo",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"usdc_amount",type:"uint256"}],name:"donate",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"donateReserve",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"getVaultController",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"addedValue",type:"uint256"}],name:"increaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"reserveAddr",type:"address"}],name:"initialize",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"usdc_amount",type:"uint256"}],name:"mint",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"monetaryPolicy",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"who",type:"address"}],name:"nonces",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"pause",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"paused",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"pauser",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"value",type:"uint256"},{internalType:"uint256",name:"deadline",type:"uint256"},{internalType:"uint8",name:"v",type:"uint8"},{internalType:"bytes32",name:"r",type:"bytes32"},{internalType:"bytes32",name:"s",type:"bytes32"}],name:"permit",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"epoch",type:"uint256"},{internalType:"uint256",name:"supplyAdd",type:"uint256"},{internalType:"uint256",name:"supplyRemove",type:"uint256"}],name:"rebase",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"reserveAddress",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"reserveRatio",outputs:[{internalType:"uint192",name:"e18_reserve_ratio",type:"uint192"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"who",type:"address"}],name:"scaledBalanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"scaledTotalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"monetaryPolicy_",type:"address"}],name:"setMonetaryPolicy",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"pauser_",type:"address"}],name:"setPauser",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"vault_master_address",type:"address"}],name:"setVaultController",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"value",type:"uint256"}],name:"transfer",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"to",type:"address"}],name:"transferAll",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"}],name:"transferAllFrom",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"value",type:"uint256"}],name:"transferFrom",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"unpause",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"target",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"vaultControllerBurn",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"amount",type:"uint256"}],name:"vaultControllerDonate",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"target",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"vaultControllerMint",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"target",type:"address"},{internalType:"uint256",name:"usdc_amount",type:"uint256"}],name:"vaultControllerTransfer",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"usdc_amount",type:"uint256"}],name:"withdraw",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"withdrawAll",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"target",type:"address"}],name:"withdrawAllTo",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"usdc_amount",type:"uint256"},{internalType:"address",name:"target",type:"address"}],name:"withdrawTo",outputs:[],stateMutability:"nonpayable",type:"function"}];function z(){const u=M(),o=M(),l=b.exports.useRef(null),[i,A]=b.exports.useState(""),D=f({abi:h,contractAddress:"0xB8Af8C538EE795e5D79cD74F0D00B10FF4a00918",functionName:"withdraw",params:{usdc_amount:parseInt(i||"0")*10**6}}),S=f({abi:h,contractAddress:"0xB8Af8C538EE795e5D79cD74F0D00B10FF4a00918",functionName:"deposit",params:{usdc_amount:parseInt(i||"0")*10**6}}),O=f({abi:v,contractAddress:"0x07865c6E87B9F70255377e024ace6630C1Eaa37F",functionName:"approve",params:{spender:"0xB8Af8C538EE795e5D79cD74F0D00B10FF4a00918",amount:parseInt(i||"0")*10**6}}),d=T({abi:I,address:"0x0d9bC0A527f72CAB1591d13aFeC74810744FA184",functionName:"getCurveMaster",params:{},chain:"goerli"}),m=T({abi:h,address:"0xB8Af8C538EE795e5D79cD74F0D00B10FF4a00918",functionName:"_totalSupply",params:{},chain:"goerli"}),c=T({abi:v,address:"0x07865c6E87B9F70255377e024ace6630C1Eaa37F",functionName:"balanceOf",params:{account:"0xB8Af8C538EE795e5D79cD74F0D00B10FF4a00918"},chain:"goerli"});return b.exports.useEffect(()=>{d.runContractFunction,m.runContractFunction(),c.runContractFunction()},[]),console.log(d.data),t("div",{children:[e(n,{children:t(a,{w:"90%",flexDirection:"row",h:"auto",borderWidth:"2px",borderRadius:"3xl",p:"6",boxShadow:"dark-lg",borderColor:"blackAlpha.500",bg:"#393E46",top:"20px",pos:"relative",children:[t(a,{layerStyle:"data",children:[e(n,{children:e(s,{size:"lg",fontFamily:"Merienda One",fontWeight:"900",children:" Current yield "})}),t(n,{textStyle:"data",children:[d.data," %"]})]}),e(p,{}),t(a,{layerStyle:"data",children:[e(n,{children:e(s,{size:"lg",fontFamily:"Merienda One",fontWeight:"900",children:" Total USDI supply "})}),t(n,{textStyle:"data",children:[parseInt(m.data||"0")/10**18,"  USDI"]})]}),e(p,{}),t(a,{layerStyle:"data",children:[e(n,{children:e(s,{size:"lg",fontFamily:"Merienda One",fontWeight:"900",children:" Reserve Ratio "})}),t(n,{textStyle:"data",children:[" ",parseInt(c.data||"0")*10**12/parseInt(m.data||"0")," %"]})]}),e(p,{}),t(a,{layerStyle:"data",children:[e(n,{children:e(s,{size:"lg",fontFamily:"Merienda One",fontWeight:"900",children:" USDC in reserve "})}),t(n,{textStyle:"data",children:[parseInt(c.data||"0")/10**6," USDC"]})]})]})}),e(n,{children:e(a,{layerStyle:"background",justifyContent:"center",top:"110px",children:t(a,{layerStyle:"primary",children:[e(n,{children:t(a,{layerStyle:"secondary",children:[e(n,{position:"relative",top:"-6px",children:e(s,{size:"lg",fontFamily:"Merienda One",fontWeight:"900",children:" Your deposited amount "})}),e(n,{position:"relative",top:"-6px",children:e(y,{textStyle:"data",children:" 120,350 $"})}),e(n,{position:"relative",top:"10px",children:e(s,{size:"md",fontFamily:"Merienda One",fontWeight:"900",children:" Your Wallet Balance "})}),e(n,{position:"relative",top:"10px",children:e(y,{textStyle:"dataSmall",children:" 1,450 USDl"})})]})}),e(R,{variant:"NumberInputField",value:i,onChange:B=>A(B),children:e(n,{children:e(W,{borderColor:"grey",borderWidth:"2px",fontWeight:"300",fontFamily:"Merienda One",w:"70%",borderRadius:"30",color:"white",placeholder:"Enter your desired amount",_placeholder:{opacity:1,color:"white",textAlign:"center"},textAlign:"center",top:"30",bg:"gray.600"})})}),e(n,{children:t(a,{w:"80%",children:[e(r,{onClick:o.onOpen,variant:"greenButton",children:" Deposit"}),e(p,{}),e(r,{onClick:u.onOpen,variant:"redButton",children:" Withdraw"}),t(g,{motionPreset:"slideInBottom",leastDestructiveRef:l,onClose:o.onClose,isOpen:o.isOpen,isCentered:!0,children:[e(w,{backdropFilter:"auto",backdropBlur:"10px",bg:"blackAlpha.500"}),"   ",t(x,{bg:"#393E46",borderRadius:"20px",w:"2000px",children:[e(C,{fontFamily:"Merienda One",color:"#EEEEEE",fontWeight:"100",children:"Confirm deposit"}),e(E,{}),e(_,{fontFamily:"Merienda One",color:"#EEEEEE",fontWeight:"500",fontSize:"lg",children:t(n,{children:[" ",t(y,{children:["are you sure you want to deposit ",i," USDC ? "]})," "]})}),e(F,{children:t(a,{gap:"2",children:[e(r,{ref:l,onClick:o.onClose,bgColor:"red.500",w:"12",children:"No"}),e(p,{}),e(r,{bgColor:"green.500",w:"12",onClick:()=>{S.fetch(),O.fetch()},children:"Yes"})]})})]})]}),t(g,{motionPreset:"slideInBottom",leastDestructiveRef:l,onClose:u.onClose,isOpen:u.isOpen,isCentered:!0,children:[e(w,{backdropFilter:"auto",backdropBlur:"10px",bg:"blackAlpha.500"}),"   ",t(x,{bg:"#393E46",borderRadius:"20px",w:"2000px",children:[e(C,{fontFamily:"Merienda One",color:"#EEEEEE",fontWeight:"100",children:"Confirm withdraw"}),e(E,{}),e(_,{fontFamily:"Merienda One",color:"#EEEEEE",fontWeight:"500",fontSize:"lg",children:t(n,{children:[" ",t(y,{children:["are you sure you want to withdraw ",i," USDC ? "]})," "]})}),e(F,{children:t(a,{gap:"2",children:[e(r,{ref:l,onClick:u.onClose,bgColor:"red.500",w:"12",children:"No"}),e(p,{}),t(r,{bgColor:"green.500",w:"12",onClick:()=>D.fetch(),children:[" ","Yes"]})]})})]})]})]})})]})})})]})}export{z as default};
