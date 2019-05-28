(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(e){e.exports={contractName:"TwitterHumanityApplicant",abi:[{constant:!1,inputs:[{name:"who",type:"address"},{name:"username",type:"string"}],name:"applyWithTwitterFor",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"who",type:"address"}],name:"applyFor",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"who",type:"address"},{name:"username",type:"string"}],name:"applyWithTwitterUsingEtherFor",outputs:[{name:"",type:"uint256"}],payable:!0,stateMutability:"payable",type:"function"},{constant:!0,inputs:[],name:"humanity",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"who",type:"address"}],name:"applyWithEtherFor",outputs:[{name:"",type:"uint256"}],payable:!0,stateMutability:"payable",type:"function"},{constant:!0,inputs:[],name:"governance",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"registry",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"username",type:"string"}],name:"applyWithTwitterUsingEther",outputs:[{name:"",type:"uint256"}],payable:!0,stateMutability:"payable",type:"function"},{constant:!0,inputs:[],name:"exchange",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"username",type:"string"}],name:"applyWithTwitter",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"nonpayable",type:"function"},{inputs:[{name:"_governance",type:"address"},{name:"_registry",type:"address"},{name:"_humanity",type:"address"},{name:"_exchange",type:"address"}],payable:!1,stateMutability:"nonpayable",type:"constructor"},{payable:!0,stateMutability:"payable",type:"fallback"},{anonymous:!1,inputs:[{indexed:!0,name:"proposalId",type:"uint256"},{indexed:!0,name:"applicant",type:"address"},{indexed:!1,name:"username",type:"string"}],name:"Apply",type:"event"}],networks:{1:{name:"Mainnet",address:"0x9D661f7773Be14439b4223F5b516bC7Ef67b0369"}}}},197:function(e,t,a){e.exports=a(594)},202:function(e,t,a){},228:function(e,t){},230:function(e,t){},352:function(e,t){},435:function(e,t){},591:function(e,t,a){},594:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(189),o=a.n(r),p=(a(202),a(194)),i=a(21),l=a.n(i),u=a(42),c=a(190),m=a(191),y=a(195),d=a(192),b=a(196),v=a(193),f=a(98),h=a(99),E=a(100),g=a(101),w=a.n(g),x=function(){return new Promise(function(e,t){window.addEventListener("load",Object(u.a)(l.a.mark(function t(){var a,n;return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:a=new w.a.providers.HttpProvider("https://mainnet.infura.io/"),n=new w.a(a),console.log("Using infura's Ethereum API."),e(n);case 4:case"end":return t.stop()}},t,this)})))})},N=(a(591),function(e,t){return e?s.a.createElement("span",{className:"text-success"},t):s.a.createElement("span",{className:"text-danger"},t)}),M={0:s.a.createElement("span",{className:"text-info"},"Pending"),1:s.a.createElement("span",{className:"text-success"},"Yes"),2:s.a.createElement("span",{className:"text-danger"},"No")},k=function(e){return s.a.createElement("a",{href:"https://etherscan.io/address/".concat(e),target:"_blank",rel:"noopener noreferrer"},e)},P=function(e){return s.a.createElement("a",{href:"https://etherscan.io/tx/".concat(e),target:"_blank",rel:"noopener noreferrer"},e)},I=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(y.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(s)))).state={web3:null,accounts:null,humanityRegistryContract:null,humanityGovernanceContract:null,twitterHumanityApplicantContract:null,textToSearch:"",proposal:null,voteEvents:[],removeVoteEvents:[],applyEventsFromAddress:[],applyEventsFromProposalId:[],searchedAddress:"",isSearching:!1},a.componentDidMount=Object(u.a)(l.a.mark(function e(){var t,n,s,r,o;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x();case 3:return t=e.sent,e.next=6,t.eth.getAccounts();case 6:return n=e.sent,1,s=new t.eth.Contract(f.abi,f.networks[1].address),r=new t.eth.Contract(h.abi,h.networks[1].address),o=new t.eth.Contract(E.abi,E.networks[1].address),e.next=13,a.setState({web3:t,accounts:n,humanityRegistryContract:s,humanityGovernanceContract:r,twitterHumanityApplicantContract:o});case 13:a.fetchProposalState("967"),e.next=20;break;case 16:e.prev=16,e.t0=e.catch(0),alert("Failed to load web3, accounts, or contract. Check console for details."),console.error(e.t0);case 20:case"end":return e.stop()}},e,this,[[0,16]])})),a.fetchProposalState=function(){var e=Object(u.a)(l.a.mark(function e(t){var n,s,r,o,i,u,c,m,y,d,b,v,f,h,E,g;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=a.state,s=n.web3,r=n.humanityGovernanceContract,o=n.twitterHumanityApplicantContract,a.setState({isSearching:!0}),e.prev=2,i=t,!s.utils.isAddress(t)){e.next=14;break}return u=t,e.next=8,o.getPastEvents("Apply",{filter:{applicant:u},fromBlock:7723946});case 8:c=e.sent,console.log("applyEventsFromAddress",c),a.setState({searchingAddress:u,applyEventsFromAddress:c}),c.length>0&&(i=c[c.length-1].returnValues.proposalId),e.next=15;break;case 14:a.setState({searchingAddress:"",applyEventsFromAddress:[]});case 15:return e.next=17,Promise.all([r.methods.getProposal(i).call(),r.getPastEvents("Vote",{filter:{proposalId:i},fromBlock:7723872}),r.getPastEvents("RemoveVote",{filter:{proposalId:i},fromBlock:7723872}),o.getPastEvents("Apply",{filter:{proposalId:i},fromBlock:7723946})]);case 17:m=e.sent,y=Object(p.a)(m,4),d=y[0],b=y[1],v=y[2],f=y[3],d.proposalIdStr=i,d.data.includes("0a3b0a4f")?d.proposedAddress=s.utils.toChecksumAddress(d.data.replace("0x0a3b0a4f000000000000000000000000","0x")):d.data.includes("10bf5068")&&(h=d.data.replace("0x10bf50680000000000000000000000000000000000000000000000","0x"),E=parseInt(h),g=E/1e18,d.amount=g),console.log("proposal",d),console.log("voteEvents",b),console.log("removeVoteEvents",v),console.log("applyEventsFromProposalId",f),a.setState({isSearching:!1,proposal:d,voteEvents:b,removeVoteEvents:v,applyEventsFromProposalId:f}),e.next=37;break;case 32:e.prev=32,e.t0=e.catch(2),console.error(e.t0),alert("Wrong Proposal ID or Address."),a.setState({isSearching:!1});case 37:case"end":return e.stop()}},e,this,[[2,32]])}));return function(t){return e.apply(this,arguments)}}(),a.handleProposalIdTextChange=function(e){a.setState({textToSearch:e.target.value.trim()})},a.handleSearch=function(e){e.preventDefault(),a.fetchProposalState(a.state.textToSearch)},a}return Object(b.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e,t,a=this.state,n=a.web3,r=a.applyEventsFromAddress,o=a.proposal,p=a.voteEvents,i=a.removeVoteEvents,l=a.applyEventsFromProposalId,u=a.isSearching;return n?s.a.createElement("div",{className:"App"},s.a.createElement("nav",{className:"navbar justify-content-start navbar-light bg-light"},s.a.createElement("span",{className:"navbar-brand mb-0 h1"},"HumanityDAO Proposal Status Checker"),s.a.createElement("a",{className:"nav-link",href:"https://humanitydao.org/",target:"_blank",rel:"noopener noreferrer"},"Humanity"),s.a.createElement("a",{className:"nav-link",href:"https://discord.gg/yvUqPUn",target:"_blank",rel:"noopener noreferrer"},"Discord")),s.a.createElement("div",{className:"container pt-3 pb-3"},s.a.createElement("form",{onSubmit:this.handleSearch,className:"form-inline justify-content-center mb-5"},s.a.createElement("input",{type:"text",className:"form-control",value:this.state.textToSearch,onChange:this.handleProposalIdTextChange,placeholder:"Proposal ID or Address"}),s.a.createElement("input",{type:"submit",className:"btn btn-primary",value:"Search"})),u&&s.a.createElement("div",{className:"text-center"},s.a.createElement("div",{className:"spinner-grow",role:"status"},s.a.createElement("span",{className:"sr-only"},"Loading..."))),r.length>0&&s.a.createElement("div",{className:"mb-5"},s.a.createElement("div",{className:"section-title"},"Proposals from Address"),s.a.createElement("div",null,r.map(function(e){return s.a.createElement("span",{key:"apply-"+e.returnValues.proposalId.toString()},"#",e.returnValues.proposalId.toString()," ")}))),o&&s.a.createElement("div",{className:"mb-5"},s.a.createElement("div",{className:"section-title"},"Proposal"),s.a.createElement("table",{className:"table table-bordered"},s.a.createElement("tbody",null,s.a.createElement("tr",null,s.a.createElement("td",{className:"bg-gray"},"Proposal ID"),s.a.createElement("td",null,o.proposalIdStr.toString())),s.a.createElement("tr",null,s.a.createElement("td",{className:"bg-gray"},"Proposer"),s.a.createElement("td",{className:"td-address"},k(o.feeRecipient))),o.proposedAddress?s.a.createElement("tr",null,s.a.createElement("td",{className:"bg-gray"},"Address"),s.a.createElement("td",{className:"td-address"},k(o.proposedAddress))):s.a.createElement("tr",null,s.a.createElement("td",{className:"bg-gray"},"Proposed new fee"),s.a.createElement("td",{className:"td-address"},o.amount)),o.proposedAddress?s.a.createElement("tr",null,s.a.createElement("td",{className:"bg-gray"},"Twitter"),s.a.createElement("td",null,(t=l[0].returnValues.username,s.a.createElement("a",{href:"https://twitter.com/".concat(t),target:"_blank",rel:"noopener noreferrer"},"@",t)))):s.a.createElement("tr",null),s.a.createElement("tr",null,s.a.createElement("td",{className:"bg-gray"},"Starting Time"),s.a.createElement("td",null,v.unix(parseInt(o.startTime)).format("MMM DD YYYY HH:mm:ss Z"))),s.a.createElement("tr",null,s.a.createElement("td",{className:"bg-gray"},"Votes (Yes / No)"),s.a.createElement("td",null,N(!0,n.utils.fromWei(o.yesCount.toString()))," ","/"," ",N(!1,n.utils.fromWei(o.noCount.toString())))),s.a.createElement("tr",null,s.a.createElement("td",{className:"bg-gray"},"Result"),s.a.createElement("td",null,(e=o.result,M[e])))))),p.length>0&&s.a.createElement("div",{className:"mb-5"},s.a.createElement("div",{className:"section-title"},"Vote Events"),s.a.createElement("table",{className:"table table-bordered"},s.a.createElement("thead",{className:"thead-light"},s.a.createElement("tr",null,s.a.createElement("th",null,"TX"),s.a.createElement("th",null,"Voter"),s.a.createElement("th",null,"Voted for"),s.a.createElement("th",null,"Weight"))),s.a.createElement("tbody",null,p.map(function(e,t){var a=e.returnValues;return s.a.createElement("tr",{key:"vote-event-"+t},s.a.createElement("td",{className:"td-tx"},P(e.transactionHash)),s.a.createElement("td",{className:"td-address"},k(a.voter)),s.a.createElement("td",null,a.approve?s.a.createElement("span",{className:"text-success"},"Yes"):s.a.createElement("span",{className:"text-danger"},"No")),s.a.createElement("td",null,N(a.approve,n.utils.fromWei(a.weight.toString()))))})))),i.length>0&&s.a.createElement("div",{className:"mb-5"},s.a.createElement("div",{className:"section-title"},"RemoveVote Events"),s.a.createElement("table",{className:"table table-bordered"},s.a.createElement("thead",{className:"thead-light"},s.a.createElement("tr",null,s.a.createElement("th",null,"TX"),s.a.createElement("th",null,"Voter"))),s.a.createElement("tbody",null,i.map(function(e,t){var a=e.returnValues;return s.a.createElement("tr",{key:"vote-event-"+t},s.a.createElement("td",{className:"td-tx"},P(e.transactionHash)),s.a.createElement("td",{className:"td-address"},k(a.voter)))}))))),s.a.createElement("footer",{className:"footer bg-light text-center"},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"text-muted"},s.a.createElement("a",{href:"https://github.com/Roger-Wu/humanitydao-applicant-status-checker",target:"_blank",rel:"noopener noreferrer"},"Source Code on GitHub")),s.a.createElement("div",{className:"text-muted"},"Donate ETH or tokens:"," ",k("0x36fAa1e49fF125ac72ceae0d5a2E35bC9aDD6591"))))):s.a.createElement("div",{className:"text-center pt-5"},s.a.createElement("div",{className:"spinner-grow",role:"status"},s.a.createElement("span",{className:"sr-only"},"Loading...")))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(s.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},98:function(e){e.exports={contractName:"HumanityRegistry",abi:[{constant:!1,inputs:[{name:"who",type:"address"}],name:"add",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"who",type:"address"}],name:"remove",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"humanity",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"governance",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"",type:"address"}],name:"humans",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"who",type:"address"}],name:"isHuman",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{inputs:[{name:"_humanity",type:"address"},{name:"_governance",type:"address"}],payable:!1,stateMutability:"nonpayable",type:"constructor"}],networks:{1:{name:"Mainnet",address:"0x4EE46dc4962C2c2F6bcd4C098a0E2b28f66A5E90"}}}},99:function(e){e.exports={contractName:"HumanityGovernance",abi:[{constant:!0,inputs:[{name:"",type:"uint256"}],name:"proposals",outputs:[{name:"result",type:"uint8"},{name:"target",type:"address"},{name:"data",type:"bytes"},{name:"proposer",type:"address"},{name:"feeRecipient",type:"address"},{name:"fee",type:"uint256"},{name:"startTime",type:"uint256"},{name:"yesCount",type:"uint256"},{name:"noCount",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"proposalId",type:"uint256"}],name:"finalize",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"",type:"uint256"},{name:"",type:"address"}],name:"yesVotes",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"fee",type:"uint256"}],name:"setProposalFee",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"time",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"proposalId",type:"uint256"}],name:"voteNo",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"amount",type:"uint256"}],name:"withdraw",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"proposalId",type:"uint256"}],name:"removeVote",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"OPEN_VOTE_PERIOD",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"proposalId",type:"uint256"}],name:"voteYes",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"TOTAL_VOTE_PERIOD",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"getProposalsCount",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"target",type:"address"},{name:"data",type:"bytes"}],name:"propose",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"void",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"",type:"address"}],name:"withdrawTimes",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"amount",type:"uint256"}],name:"deposit",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"proposalFee",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"proposalId",type:"uint256"}],name:"getProposal",outputs:[{components:[{name:"result",type:"uint8"},{name:"target",type:"address"},{name:"data",type:"bytes"},{name:"proposer",type:"address"},{name:"feeRecipient",type:"address"},{name:"fee",type:"uint256"},{name:"startTime",type:"uint256"},{name:"yesCount",type:"uint256"},{name:"noCount",type:"uint256"}],name:"",type:"tuple"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"",type:"uint256"},{name:"",type:"address"}],name:"noVotes",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"feeRecipient",type:"address"},{name:"target",type:"address"},{name:"data",type:"bytes"}],name:"proposeWithFeeRecipient",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"VETO_PERIOD",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"token",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"",type:"address"}],name:"deposits",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{inputs:[{name:"humanity",type:"address"},{name:"proposalFee",type:"uint256"}],payable:!1,stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,name:"proposalId",type:"uint256"}],name:"Execute",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"proposalId",type:"uint256"},{indexed:!0,name:"proposer",type:"address"},{indexed:!0,name:"target",type:"address"},{indexed:!1,name:"data",type:"bytes"}],name:"Propose",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"proposalId",type:"uint256"},{indexed:!0,name:"voter",type:"address"}],name:"RemoveVote",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"proposalId",type:"uint256"}],name:"Terminate",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"proposalId",type:"uint256"},{indexed:!0,name:"voter",type:"address"},{indexed:!1,name:"approve",type:"bool"},{indexed:!1,name:"weight",type:"uint256"}],name:"Vote",type:"event"}],networks:{1:{name:"Mainnet",address:"0xDd806c4fDAd2949a97Fda79036cfbb8750181b37"}}}}},[[197,2,1]]]);
//# sourceMappingURL=main.448f38ac.chunk.js.map