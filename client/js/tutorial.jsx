var HelloName = React.createClass({
  getInitialState: function() {
    return {
      username: '',
      lastGistUrl: ''
    };
  },
  componentDidMount: function() {
    this.serverRequest = $.get(this.props.source, function (result) {
      console.log(result);
      this.setState({
        name: result.name,
      });
    }.bind(this));
  },
  componentWillUnmount: function() {
    this.serverRequest.abort();
  },
  render: function () {
    return (
      <h1>Hello there, {this.state.name}!</h1>
    );
  }
});

ReactDOM.render(
  <HelloName source="http://localhost:3000/"/>,
  document.getElementById('entrance')
);
