import React, { Component } from 'react';


class MyInput extends Component {

	_on_change(e){
		e.preventDefault();
	
		this.props.nolanChange(e);
	}

	render () {
	    return (
	    	<div className="col-xs-2">
	  	    	<input type="text" name={this.props.name} value={this.props.value}  onChange={this._on_change.bind(this)} autoFocus placeholder={this.props.placeho}/>
	    	</div>
	    	);
	  }
}

export default MyInput;
