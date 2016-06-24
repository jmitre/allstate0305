var CurrentGame = React.createClass({
  getInitialState: function() {
    return {
      username: '',
      lastGistUrl: ''
    };
  },
  componentDidMount: function() {
    this.serverRequest = $.get('http://localhost:3000/bad', function (result) {
      console.log(result);
      this.setState({
        gameName: result[0].gameName,
        gameId: result[0]._id,
        gamePlayer: result[0].playerName,
        gameAnte: result[0].ante,
        gameBets: result[0].bets
      });
    }.bind(this));
  },
  componentWillUnmount: function() {
    this.serverRequest.abort();
  },
  render: function() {
    console.log('Way Out');
    console.log(this.state);
    return (
      <div>
        <h1>{this.state.gameName} Ante: {this.state.gameAnte}</h1>
        <br></br>
        <h3>Bet List</h3>
        <br></br>
        <BetList bets={this.state.gameBets}></BetList>
      </div>
    )
  }
});

var BetList =  React.createClass({
  // getInitialState: function() {
  //   bets: this.props.bets.map(function(bet, idx) {
  //     return (
  //       <Bet name={bet.name} range={bet.range} key={idx}></Bet>
  //     )
  //   })
  // },
  // componentDidMount: function() {
  //   this.setState({
  //     bets: this.state.bets.map(function(bet, idx) {
  //       return (
  //         <Bet name={bet.name} range={bet.range} key={idx}></Bet>
  //       )
  //     })
  //   });
  // },
  // componentWillUnmount: function() {
  //   this.serverRequest.abort();
  // },
  render: function(){
    console.log('Out here');
    console.log(this.props.bets);
    var bets;
    !this.props.bets ? bets = <Bet name='' range=''></Bet> : bets = this.props.bets.map(function(bet, idx) {
      <Bet name={bet.name} range={bet.range}></Bet>
    })
    console.log(bets);

    return (
      <ul>{bets}</ul>
    )
  }
});

var Bet =  React.createClass({
  render: function(){
    console.log('In here');
    console.log(this.props.name);
    return (
      <li>{this.props.name}: {this.props.range}</li>
    )
  }
});

ReactDOM.render(<CurrentGame/>, document.getElementById('entrance'));
