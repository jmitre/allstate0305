var LandingPage = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Welcome To <span class='big'>$</span>lither</h1>
        <a href="../html/home.html">
          <button>Get $$$tarted!!!</button>
        </a>
      </div>
    );
  }
});

ReactDOM.render(<LandingPage/>, document.getElementById('entrance'));
