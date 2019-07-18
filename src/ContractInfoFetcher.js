import HumanityGovernanceJSON from "./contracts/HumanityGovernance.json";
import TwitterHumanityApplicantJSON from "./contracts/TwitterHumanityApplicant.json";

const makeContractInfoFetcher = web3 => {
  const mainnetNetworkId = 1;

  const humanityGovernanceContract = new web3.eth.Contract(
    HumanityGovernanceJSON.abi,
    HumanityGovernanceJSON.networks[mainnetNetworkId].address
  );

  const twitterHumanityApplicantContract = new web3.eth.Contract(
    TwitterHumanityApplicantJSON.abi,
    TwitterHumanityApplicantJSON.networks[mainnetNetworkId].address
  );

  const fetchAllProposals = async () => {
    const proposalCount = await humanityGovernanceContract.methods
      .getProposalsCount()
      .call();
    var i;

    const proposals = [];

    for (i = proposalCount - 1; i > 0; i--) {
      const proposal = await humanityGovernanceContract.methods
        .getProposal(i)
        .call();
      if (proposal.result !== 0) break;
      console.log(i);
      proposals.push({ ...proposal, id: i });
    }

    return proposals;
  };

  const fetchProposalState = async textToSearch => {
    try {
      let proposalIdStr = textToSearch;

      const [
        proposal,
        voteEvents,
        removeVoteEvents,
        applyEventsFromProposalId
      ] = await Promise.all([
        humanityGovernanceContract.methods.getProposal(proposalIdStr).call(),
        humanityGovernanceContract.getPastEvents("Vote", {
          filter: {
            proposalId: proposalIdStr
          },
          fromBlock: 7723872
        }),
        humanityGovernanceContract.getPastEvents("RemoveVote", {
          filter: {
            proposalId: proposalIdStr
          },
          fromBlock: 7723872
        }),
        twitterHumanityApplicantContract.getPastEvents("Apply", {
          filter: {
            proposalId: proposalIdStr
          },
          fromBlock: 7723946
        })
      ]);

      proposal.proposalIdStr = proposalIdStr;
      proposal.proposedAddress = web3.utils.toChecksumAddress(
        proposal.data.replace("0x0a3b0a4f000000000000000000000000", "0x")
      );

      return {
        proposal,
        voteEvents,
        removeVoteEvents,
        applyEventsFromProposalId
      };
    } catch (error) {
      console.error(error);
      alert("Wrong Proposal ID or Address.");
    }
  };
  return { fetchProposalState, fetchAllProposals };
};

export default makeContractInfoFetcher;
