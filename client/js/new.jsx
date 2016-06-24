var NewGame = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();
    var gameName = $('#gameName').val();
    var playerName = $('#playerName').val();
    var ante = $('#ante').val();
    var data = {};
    data.gameName = gameName;
    data.playerName = playerName;
    data.ante = ante;
    $.post('http://localhost:3000/new', data, function() {
      console.log('helloooooo');
      window.location.href='../html/home.html'
    });
  },
  render: function() {
    return (
      <div>
        <form className='makeGame' onSubmit={this.handleSubmit}>
          <fieldset>
            <legend>Create Game to Bet On</legend>
            <input id='gameName' type="text" name="gameName" placeholder="Name of game"></input>
            <br></br>
            <input id='playerName' type="text" name="playerName" placeholder="Player Name"></input>
            <br></br>
            <select name="ante" id='ante'>
              <option value="1">$1 Ante</option>
              <option value="5">$5 Ante</option>
              <option value="10">$10 Ante</option>
              <option value="20">$20 Ante</option>
            </select>
            <br></br>
            <a href="../html/home.html">
              <input id='submit' type="submit" value="Create Game"></input>
            </a>
          </fieldset>
        </form>
      </div>
    );
  }
});

ReactDOM.render(<NewGame/>, document.getElementById('entrance'));
