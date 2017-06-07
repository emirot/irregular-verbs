import React, { Component } from 'react';


class ReadOnlyMyInput extends Component {


	render () {
	    return (
	    	<div className="col-xs-2">
	  	    	<input type="text" name={this.props.name} value={this.props.value} readOnly />
	    	</div>
	    	);
	  }
}

export default ReadOnlyMyInput;
