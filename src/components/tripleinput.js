import React, { Component } from 'react';

import MyInput from './myinput.js'
import ReadOnlyInput from './readonlyinput.js'


class TripleInputBox extends Component {

	constructor(props) {
		super(props);
		this.time_r = false;
		this.data = require('../data/data.json');
		let dataV =  JSON.parse(JSON.stringify( this.data )); 
		let obj_keys = Object.keys(dataV);
		let ran_key = obj_keys[Math.floor(Math.random() * obj_keys.length)];
		let blank = [false, false, false];
		let rand = this.getRandomArbitrary(0, 3);
		blank[rand] = true;
		var response = dataV[ran_key][rand];
		var intervalId = setInterval(this.timer, 4000);
		dataV[ran_key][rand] = "";
		this.state = {
			"inputs": [
				{ key: 0, name: "0", value: dataV[ran_key][0], empty_box: blank[0].toString(),placeh:"Infinitve" },
				{ key: 1, name: "1", value: dataV[ran_key][1], empty_box: blank[1].toString(),placeh:"Simple Past" },
				{ key: 2, name: "2", value: dataV[ran_key][2], empty_box: blank[2].toString(), placeh:"Past Participle" }
			], "response": response, "cnt":0, "intervalId" : intervalId
		};
		this.handleChange = this.handleChange.bind(this);
	}

	getRandomArbitrary(min, max) {
		return Math.floor(Math.random() * (max - min)) + min;
	}


	setNewVerb() {
		const dataJson = require('../data/data.json');
		let datac =  JSON.parse(JSON.stringify( dataJson )); 
		var obj_keys = Object.keys(dataJson);
		var ran_key = obj_keys[Math.floor(Math.random() * obj_keys.length)];
		var blank = [false, false, false];
		var rand = this.getRandomArbitrary(0, 3);
		blank[rand] = true;
		//console.log("rmnl:"+ datac[ran_key]);
		const response = datac[ran_key][rand];
		datac[ran_key][rand] = "";
		var obj = {
			"inputs": [
				{ key: 0, name: "0", value: datac[ran_key][0], empty_box: blank[0].toString(), placeh:"Infinitve"},
				{ key: 1, name: "1", value: datac[ran_key][1], empty_box: blank[1].toString(), placeh:"Simple Past"},
				{ key: 2, name: "2", value: datac[ran_key][2], empty_box: blank[2].toString(), placeh:"Past Participle"}
			], "response": response
		};
		this.setState(obj);
	}


	handleChange(e) {
		e.preventDefault();
		var name = e.target.name;
		var stateCopy = Object.assign({}, this.state);
		stateCopy.inputs[name].value = e.target.value;
		this.setState(stateCopy);
		if (e.target.value === this.state['response']) {
			this.setNewVerb();
			this.setState({ cnt: this.state.cnt + 1});
			clearInterval(this.state.intervalId);
			var intervalId = setInterval(function(){
				if(this.state.cnt > 0){
					this.setState({"cnt": this.state.cnt - 1})
				}
				}.bind(this), 4000);
			this.setState({"intervalId": intervalId});
		}
	}

	render() {
		return (
			<div className="row">
				<p>Score : {this.state.cnt}</p>
				<p><a href="http://www.thefreedictionary.com/" >http://www.thefreedictionary.com/</a></p>
				<div className="col-xs-3"/>
				{this.state["inputs"].map((my_input) => {
					if (my_input.empty_box === "true") {
						return (<MyInput key={my_input.key} name={my_input.name} value={my_input.value} nolanChange={this.handleChange} placeho={my_input.placeh}/>);
					} else {
						return (
							<ReadOnlyInput key={my_input.key} name={my_input.name} value={my_input.value} />
						);
					}
				})
				}
				
			</div>
		);
	}

}

export default TripleInputBox;