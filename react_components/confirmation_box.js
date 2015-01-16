/** @jsx React.DOM */

var React               = require("react");
var ConfirmationBoxView = require("./ConfirmationBoxView");


function ConfirmationBox(action, confirmation) {
  this.action = action;
  this.confirmation = confirmation;

  this.actionName = this.action.actionName;
  this.actionMessage = this.action.actionMessage || null;
  this.inputMarkup = this.confirmation.inputMarkup;
  this.warningMessage = this.confirmation.warningMessage || null;
  this.validationName = this.confirmation.validationName;
  this.cancellationName = this.confirmation.cancellationName;
}

ConfirmationBox.prototype.render = function(container) {
  React.renderComponent(
    <ConfirmationBoxView actionName={this.actionName}
                         actionMessage={this.actionMessage}
                         inputMarkup={this.inputMarkup}
                         warningMessage={this.warningMessage}
                         validationName={this.validationName}
                         cancellationName={this.cancellationName} />,
    container
  );
}

module.exports = ConfirmationBox;
