//React Stuff
import React, {PropTypes} from 'react';
import Component from 'react';

class Flipper extends React.Component {
  render() {
    return (
      <div className={"w3-third w3-animate-bottom w3-margin-bottom flipper-container " + this.props.orientation}>
  		  <div className={"flipper w3-margin-bottom" + (this.props.flipped ? " flipped" : "")}>
  		    <Front></Front>
  		    <Back>the back!</Back>
        </div>
  		</div>
    );
  }
}

export default Flipper;
