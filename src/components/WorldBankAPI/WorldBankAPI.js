
import React, { Component } from 'react';
import './WorldBankAPI.css';
import axios from 'axios';

class WorldBankAPI extends Component {
	state = {
		worldBankData: null,
	}

	componentDidMount() {
		const wbData = {};
		console.log('WorldBank: Did Mount', this.props);
		const { departureCode, arrivalCode } = this.props;
		const url = `https://api.worldbank.org/v2/country/${departureCode};${arrivalCode}/indicator/PA.NUS.PPPC.RF?format=json&date=2017`;
		axios.get(url)
			.then((res) => {
				res.data[1].forEach((data) => {
					wbData[data.countryiso3code] = data.value;
				});
				this.setState({ worldBankData: wbData });
			});
	}

	render() {
		let ppp;
		if (this.state.worldBankData) {
			const { worldBankData } = this.state;
			const { arrivalCode, departureCode } = this.props;
			const difference = ((worldBankData[arrivalCode] / worldBankData[departureCode]) - 1).toFixed(2);
			ppp = (
				<div> {departureCode} : { worldBankData[departureCode] }
					<div> {arrivalCode }: { worldBankData[arrivalCode] } </div>
					<div> Diff: { difference }</div>
				</div>
			);
		}
		return (
			<section>
				<p> Purchasing Power </p>
				<div className="worldBankDiv">
					<p> { this.props.departureCode } </p>
					<div> {ppp} </div>
				</div>
			</section>
		);
	}
}

export default WorldBankAPI;
