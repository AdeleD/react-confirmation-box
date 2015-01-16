/** @jsx React.DOM */

var React = require("react");
var ActionView = require("./ActionView");
var ConfirmationFormView = require("./ConfirmationFormView");


var ConfirmationBoxView = React.createClass({
  propTypes: {
    actionMessage: React.PropTypes.renderable,
    actionName: React.PropTypes.string.isRequired,
    warningMessage: React.PropTypes.string.isRequired,
    inputMarkup: React.PropTypes.renderable,
    validationName: React.PropTypes.string.isRequired,
    cancellationName: React.PropTypes.string.isRequired
  },
  render: function() {
    return (
      <div className="confirmation-box">
        <ActionView actionMessage={this.props.actionMessage}
                    actionName={this.props.actionName} />

        <ConfirmationFormView warningMessage={this.props.warningMessage}
                              inputMarkup={this.props.inputMarkup}
                              validationName={this.props.validationName}
                              cancellationName={this.props.cancellationName} />
      </div>
    );
  }
});

module.exports = ConfirmationBoxView;
