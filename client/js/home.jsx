var HomePage = React.createClass({
  render: function() {
    return (
      <div>
        <h1><span class='big'>$</span>lither</h1>
        <a href="../html/new.html">
          <button>Create New Game!!!</button>
        </a>
        <h3>Current Games</h3>
        <br></br>
        <GameList></GameList>
      </div>
    );
  }
});

var GameList = React.createClass({
  getInitialState: function() {
    return {
      username: '',
      lastGistUrl: ''
    };
  },
  componentDidMount: function() {
    this.serverRequest = $.get('http://localhost:3000/', function (result) {
      console.log(result);
      this.setState({
        games: result.map(function(game, idx) {
          return (
            <Games gameName={game.gameName} key={idx} gameId={game._id}></Games>
          )
        })
      });
    }.bind(this));
  },
  componentWillUnmount: function() {
    this.serverRequest.abort();
  },
  render: function(){
    return (
      <ul>{this.state.games}</ul>
    )
  }
});

var Games = React.createClass({
  handleClick: function(e) {
    e.preventDefault();
    $.get('http://localhost:3000/'+this.props.gameId + '/bad', function() {
      window.location.href='../html/current.html';
    });
  },
  render: function() {
    return (
      <li>{this.props.gameName}
      <button class='blahBtn' onClick={this.handleClick}>Bet!!!</button>
      </li>
    );
  }
});
ReactDOM.render(<HomePage/>, document.getElementById('entrance'));
