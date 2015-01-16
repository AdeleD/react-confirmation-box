/** @jsx React.DOM */

var React = require("react");


var ConfirmationFormView = React.createClass({
  handleClickValidate: function(e) {
    e.preventDefault();
  },
  handleClickCancel: function(e) {
    e.preventDefault();
    e.target.parentElement.style.display = 'none';
    e.target.parentElement.previousSibling.style.display = 'block';
  },
  render: function() {
    var divStyle = {
      display: 'none'
    };

    return (
      <div className="confirmation-form info" style={divStyle}>
        <p>{this.props.warningMessage}</p>
        <div dangerouslySetInnerHTML={{__html: this.props.inputMarkup}}></div>
        <button className="warning" onClick={this.handleClickValidate}>{this.props.validationName}</button>
        <button className="back" onClick={this.handleClickCancel}>{this.props.cancellationName}</button>
      </div>
    );
  }
});

module.exports = ConfirmationFormView;
