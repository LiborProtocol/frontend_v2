import{h as E,r as s,l as o,m as F,n as S,j as t,a as e,C as a,b as n,H as r,S as d,T as h,B as p}from"./index.af118cda.js";import{a as i}from"./AbiSeedRound.764bc36d.js";import{N as D,a as B,A as M,M as A,b as k,c as T,d as W,e as v,f as O}from"./chakra-ui-number-input.esm.0353552d.js";function R(){const l=E(),u=s.exports.useRef(null),[c,x]=s.exports.useState("");s.exports.useEffect(()=>{b.runContractFunction(),f.runContractFunction(),g.runContractFunction(),y.fetchTokenPrice()},[]);const b=o({abi:i,address:"0xa0A56825246b59C1a84b805B1a6acC410fDFcE04",functionName:"investorBalances",params:{"":"0x2718BD3048ec067E6d678b580D887bE80D0fcE0a"},chain:"goerli"}),f=o({abi:i,address:"0xa0A56825246b59C1a84b805B1a6acC410fDFcE04",functionName:"getMySeedTokens",params:{_sender:"0x2718BD3048ec067E6d678b580D887bE80D0fcE0a"},chain:"goerli"}),g=o({abi:i,address:"0xa0A56825246b59C1a84b805B1a6acC410fDFcE04",functionName:"getTotalWeiContributed",params:{},chain:"goerli"}),y=F({address:"0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",chain:"eth"});o({abi:i,address:"0xa0A56825246b59C1a84b805B1a6acC410fDFcE04",functionName:"getTotalBuys",params:{},chain:"goerli"}),o({abi:i,address:"0xa0A56825246b59C1a84b805B1a6acC410fDFcE04",functionName:"getTotalUsers",params:{},chain:"goerli"});const m=S();return t("div",{children:[e(a,{children:t(n,{w:"90%",flexDirection:"row",h:"auto",borderWidth:"2px",borderRadius:"3xl",p:"6",boxShadow:"dark-lg",borderColor:"blackAlpha.500",bg:"#393E46",top:"20px",pos:"relative",children:[t(n,{layerStyle:"data",children:[e(a,{children:e(r,{size:"lg",fontFamily:"Merienda One",fontWeight:"900",children:" Total ETH raised"})}),t(a,{textStyle:"data",children:[(parseInt(g.data||"0")/10**18).toFixed(2)," ETH"]})]}),e(d,{}),t(n,{layerStyle:"data",children:[e(a,{children:e(r,{size:"lg",fontFamily:"Merienda One",fontWeight:"900",children:" Your current deposit "})}),t(a,{textStyle:"data",children:[(parseInt(b.data||"0")/10**18).toFixed(2),"  ETH"]})]}),e(d,{}),t(n,{layerStyle:"data",children:[e(a,{children:e(r,{size:"lg",fontFamily:"Merienda One",fontWeight:"900",children:" Your current token allocation "})}),t(a,{textStyle:"data",children:[" ",(parseInt(f.data||"0")/10**18).toFixed(2)," "]})]}),e(d,{}),t(n,{layerStyle:"data",children:[e(a,{children:e(r,{size:"lg",fontFamily:"Merienda One",fontWeight:"900",children:" Current LIBOR token price"})}),e(a,{textStyle:"data",children:"0.0012$"})]})]})}),e(a,{children:e(n,{layerStyle:"background",justifyContent:"center",top:"110px",children:t(n,{layerStyle:"primary",children:[e(a,{children:t(n,{layerStyle:"secondary",children:[e(a,{position:"relative",top:"-6px",children:e(r,{size:"lg",fontFamily:"Merienda One",fontWeight:"900",children:" Your deposited amount "})}),e(a,{position:"relative",top:"-6px",children:e(h,{textStyle:"data",children:" 120,350 $"})}),e(a,{position:"relative",top:"10px",children:e(r,{size:"md",fontFamily:"Merienda One",fontWeight:"900",children:" Your Wallet Balance "})}),e(a,{position:"relative",top:"10px",children:e(h,{textStyle:"dataSmall",children:" 1,450 USDl"})})]})}),e(D,{variant:"NumberInputField",value:c,onChange:C=>x(C),children:e(a,{children:e(B,{borderColor:"grey",borderWidth:"2px",fontWeight:"300",fontFamily:"Merienda One",w:"70%",borderRadius:"30",color:"white",placeholder:"Enter your desired amount",_placeholder:{opacity:1,color:"white",textAlign:"center"},textAlign:"center",top:"30",bg:"gray.600"})})}),t(a,{children:[e(p,{onClick:l.onOpen,variant:"greenButton",w:"50%",children:" Deposit"}),t(M,{motionPreset:"slideInBottom",leastDestructiveRef:u,onClose:l.onClose,isOpen:l.isOpen,isCentered:!0,children:[e(A,{backdropFilter:"auto",backdropBlur:"10px",bg:"blackAlpha.500"}),t(k,{bg:"#393E46",borderRadius:"20px",w:"2000px",children:[e(T,{fontFamily:"Merienda One",color:"#EEEEEE",fontWeight:"100",children:"Confirm Deposit"}),e(W,{}),e(v,{fontFamily:"Merienda One",color:"#EEEEEE",fontWeight:"500",fontSize:"lg",children:t(a,{children:[" ",t(h,{children:["are you sure you want to deposit ",c," ETH ? "]})," "]})}),e(O,{children:t(n,{gap:"2",children:[e(p,{ref:u,onClick:l.onClose,bgColor:"red.500",w:"12",children:"No"}),e(d,{}),e(p,{bgColor:"green.500",w:"12",onClick:()=>m.fetch({params:{abi:i,contractAddress:"0xa0A56825246b59C1a84b805B1a6acC410fDFcE04",functionName:"reserve",params:{},msgValue:parseInt(c||"0")*10**18}}),disabled:m.isFetching,children:"Yes"})]})})]})]})]})]})})})]})}export{R as default};
