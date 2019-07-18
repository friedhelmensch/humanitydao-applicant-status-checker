import React, { Component } from "react";
import * as moment from "moment";
import getWeb3 from "./utils/getWeb3";
import makeContractInfoFetcher from "./ContractInfoFetcher";
import "./App.css";

const boolToYesNo = isYes => {
  if (isYes) {
    return <span className="text-success">Yes</span>;
  } else {
    return <span className="text-danger">No</span>;
  }
};

const formatStrWithYesNo = (isYes, str) => {
  if (isYes) {
    return <span className="text-success">{str}</span>;
  } else {
    return <span className="text-danger">{str}</span>;
  }
};

const results = {
  0: <span className="text-info">Pending</span>,
  1: <span className="text-success">Yes</span>,
  2: <span className="text-danger">No</span>
};
const resultIdxToString = resultIdx => {
  return results[resultIdx];
};

const addressToEtherscanLink = address => {
  return (
    <a
      href={`https://etherscan.io/address/${address}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      {address}
    </a>
  );
};

const decodeData = data => {
  if (data.includes("0a3b0a4f"))
    return "Add " + data.replace("0x0a3b0a4f000000000000000000000000", "0x");
  if (data.includes("10bf5068")) {
    const amountInHex = data.replace(
      "0x10bf5068000000000000000000000000000000000000000000000",
      "0x"
    );
    const amountInHum = parseInt(amountInHex) / 1e18;
    return "Set proposal fee to " + amountInHum;
  }

  return "unkown: " + data;
};

const matchAddressToName = address => {
  if (address === "0x4EE46dc4962C2c2F6bcd4C098a0E2b28f66A5E90")
    return "Registry";
  if (address === "0xDd806c4fDAd2949a97Fda79036cfbb8750181b37")
    return "Governance";
  return "unknown: " + address;
};

const txHashToEtherscanLink = txHash => {
  return (
    <a
      href={`https://etherscan.io/tx/${txHash}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      {txHash}
    </a>
  );
};

const twitterUsernameToLink = username => {
  return (
    <a
      href={`https://twitter.com/${username}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      @{username}
    </a>
  );
};

class App extends Component {
  state = {
    web3: null,
    textToSearch: "",
    proposal: null,
    voteEvents: [],
    removeVoteEvents: [],
    applyEventsFromProposalId: [],
    isSearching: false,
    activeProposals: []
  };

  fetchAndPopulate = async proposalId => {
    const result = await this.state.fetchProposalState(proposalId);

    this.setState({ isSearching: false });

    this.setState({
      proposal: result.proposal,
      voteEvents: result.voteEvents,
      removeVoteEvents: result.removeVoteEvents,
      applyEventsFromProposalId: result.applyEventsFromProposalId
    });
  };

  componentDidMount = async () => {
    try {
      const web3 = await getWeb3();

      await this.setState({ web3 });

      const { fetchProposalState, fetchAllProposals } = makeContractInfoFetcher(
        web3
      );
      this.setState({
        fetchProposalState,
        fetchAllProposals
      });
    } catch (error) {
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`
      );
      console.error(error);
    }
  };

  handleProposalIdTextChange = event => {
    this.setState({ textToSearch: event.target.value.trim() });
  };

  handleSearch = event => {
    event.preventDefault();
    this.fetchAndPopulate(this.state.textToSearch);
  };

  handleGetAllProposals = async event => {
    event.preventDefault();

    this.setState({ isSearching: true });
    const activeProposals = await this.state.fetchAllProposals();
    this.setState({ isSearching: false, activeProposals });
  };

  render() {
    const {
      web3,
      proposal,
      voteEvents,
      removeVoteEvents,
      applyEventsFromProposalId,
      isSearching,
      activeProposals
    } = this.state;

    console.log(proposal);

    if (!web3) {
      return (
        <div className="text-center pt-5">
          <div className="spinner-grow" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      );
    }
    return (
      <div className="App">
        <nav className="navbar justify-content-start navbar-light bg-light">
          <span className="navbar-brand mb-0 h1">HumanityDAO Checker</span>
          <a
            className="nav-link"
            href="https://www.humanitydao.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Humanity
          </a>
          <a
            className="nav-link"
            href="https://discord.gg/yvUqPUn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Discord
          </a>
        </nav>

        <div className="container pt-3 pb-3">
          <form
            onSubmit={this.handleGetAllProposals}
            className="form-inline justify-content-center mb-5"
          >
            <input
              type="submit"
              className="btn btn-primary"
              value="Get all active proposals"
            />
          </form>

          {isSearching && (
            <div className="text-center">
              <div className="spinner-grow" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          )}

          {activeProposals.length > 0 && (
            <div className="mb-5">
              <div className="section-title">Proposals</div>
              <table className="table table-bordered">
                <thead className="thead-light">
                  <tr>
                    <th>Proposal ID</th>
                    <th>Proposer</th>
                    <th>Proposed action</th>
                    <th>Target</th>
                    <th>Start time</th>
                  </tr>
                </thead>
                <tbody>
                  {activeProposals.map(proposal => {
                    console.log(proposal);
                    return (
                      <tr key={"proposal-" + proposal.id}>
                        <td>{proposal.id}</td>
                        <td>{addressToEtherscanLink(proposal.feeRecipient)}</td>
                        <td>{decodeData(proposal.data)}</td>
                        <td>{matchAddressToName(proposal.target)}</td>
                        <td>
                          {moment
                            .unix(parseInt(proposal.startTime))
                            .format("MMM DD YYYY HH:mm:ss Z")}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}

          <form
            onSubmit={this.handleSearch}
            className="form-inline justify-content-center mb-5"
          >
            <input
              type="text"
              className="form-control"
              value={this.state.textToSearch}
              onChange={this.handleProposalIdTextChange}
              placeholder="Proposal ID"
            />
            <input type="submit" className="btn btn-primary" value="Search" />
          </form>

          {proposal && (
            <div className="mb-5">
              <div className="section-title">Proposal</div>
              <table className="table table-bordered">
                <tbody>
                  <tr>
                    <td className="bg-gray">Proposal ID</td>
                    <td>{proposal.proposalIdStr.toString()}</td>
                  </tr>
                  <tr>
                    <td className="bg-gray">Proposer</td>
                    <td className="td-address">
                      {addressToEtherscanLink(proposal.feeRecipient)}
                    </td>
                  </tr>
                  {proposal.data.includes("0a3b0a4f") ? (
                    <tr>
                      <td className="bg-gray">Address</td>
                      <td className="td-address">
                        {addressToEtherscanLink(
                          web3.utils.toChecksumAddress(
                            proposal.data.replace(
                              "0x0a3b0a4f000000000000000000000000",
                              "0x"
                            )
                          )
                        )}
                      </td>
                    </tr>
                  ) : (
                    <tr>
                      <td className="bg-gray">Proposal type</td>
                      <td>Set Proposal fee</td>
                    </tr>
                  )}
                  {proposal.data.includes("0a3b0a4f") ? (
                    <tr>
                      <td className="bg-gray">Twitter</td>
                      <td>
                        {twitterUsernameToLink(
                          applyEventsFromProposalId[0].returnValues.username
                        )}
                      </td>
                    </tr>
                  ) : (
                    <tr>
                      <td className="bg-gray">Proposed fee</td>
                      <td>
                        {parseInt(
                          proposal.data.replace(
                            "0x10bf5068000000000000000000000000000000000000000000000",
                            "0x"
                          )
                        ) / 1e18}
                      </td>
                    </tr>
                  )}
                  <tr>
                    <td className="bg-gray">Starting Time</td>
                    <td>
                      {moment
                        .unix(parseInt(proposal.startTime))
                        .format("MMM DD YYYY HH:mm:ss Z")}
                    </td>
                    {/* <td>{ (new Date(parseInt(proposal.startTime) * 1000)).toISOString() }</td> */}
                  </tr>
                  <tr>
                    <td className="bg-gray">Votes (Yes / No)</td>
                    <td>
                      {formatStrWithYesNo(
                        true,
                        web3.utils.fromWei(proposal.yesCount.toString())
                      )}{" "}
                      /{" "}
                      {formatStrWithYesNo(
                        false,
                        web3.utils.fromWei(proposal.noCount.toString())
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-gray">Result</td>
                    <td>{resultIdxToString(proposal.result)}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}

          {voteEvents.length > 0 && (
            <div className="mb-5">
              <div className="section-title">Vote Events</div>
              <table className="table table-bordered">
                <thead className="thead-light">
                  <tr>
                    <th>TX</th>
                    <th>Voter</th>
                    <th>Voted for</th>
                    <th>Weight</th>
                  </tr>
                </thead>
                <tbody>
                  {voteEvents.map((event, index) => {
                    const values = event.returnValues;
                    return (
                      <tr key={"vote-event-" + index}>
                        <td className="td-tx">
                          {txHashToEtherscanLink(event.transactionHash)}
                        </td>
                        {/* <td>{ moment.unix(parseInt(event.startTime)).format('MMM DD YYYY HH:mm:ss Z') }</td> */}
                        <td className="td-address">
                          {addressToEtherscanLink(values.voter)}
                        </td>
                        <td>{boolToYesNo(values.approve)}</td>
                        <td>
                          {formatStrWithYesNo(
                            values.approve,
                            web3.utils.fromWei(values.weight.toString())
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}

          {removeVoteEvents.length > 0 && (
            <div className="mb-5">
              <div className="section-title">RemoveVote Events</div>
              <table className="table table-bordered">
                <thead className="thead-light">
                  <tr>
                    <th>TX</th>
                    <th>Voter</th>
                  </tr>
                </thead>
                <tbody>
                  {removeVoteEvents.map((event, index) => {
                    const values = event.returnValues;
                    return (
                      <tr key={"vote-event-" + index}>
                        <td className="td-tx">
                          {txHashToEtherscanLink(event.transactionHash)}
                        </td>
                        <td className="td-address">
                          {addressToEtherscanLink(values.voter)}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>

        <footer className="footer bg-light text-center">
          <div className="container">
            <div className="text-muted">
              <a
                href="https://github.com/Roger-Wu/humanitydao-applicant-status-checker"
                target="_blank"
                rel="noopener noreferrer"
              >
                Source Code on GitHub
              </a>
            </div>
            <div className="text-muted">
              Donate ETH or tokens:{" "}
              {addressToEtherscanLink(
                "0x36fAa1e49fF125ac72ceae0d5a2E35bC9aDD6591"
              )}
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
