/** @jsx React.DOM */
'use strict';

var React               = require('react');
var ConfirmationBoxView = require('./../react_components');

window.React = React;


var App = React.createClass({
  render: function () {
    return (
      <div>
        <ConfirmationBoxView actionName={'Delete my account'}
                             actionMessage={'Be careful, the account deleteion is an irreversible action : you will not be able to sign-in on the site. If you encounter a problem of use, please contact us.'}
                             inputMarkup={'<input id="id_password" name="password" type="password">'}
                             warningMessage={'To permanently delete your Ulule account, please enter your password and click on the red button'}
                             validationName={'Validate the definitive deletion of my account'}
                             cancellationName={'Cancel deletion'} />
      </div>
    );
  }
});

React.renderComponent(
  new App(),
  document.getElementById('react-confirmation-box')
);
