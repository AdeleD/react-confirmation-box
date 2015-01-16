/** @jsx React.DOM */

var React = require("react");


var ActionView = React.createClass({
  handleClick: function(e) {
    e.preventDefault();
    e.target.parentElement.style.display = 'none';
    e.target.parentElement.nextSibling.style.display = 'block';
  },
  render: function() {
    return (
      <div className="action info">
        <div className="action-message" dangerouslySetInnerHTML={{__html: this.props.actionMessage}}></div>
        <button className="warning" onClick={this.handleClick}>{this.props.actionName}</button>
      </div>
    );
  }
});

module.exports = ActionView;
