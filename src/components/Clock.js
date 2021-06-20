import React from "react";


class Clock extends React.Component {
	state = {
		hour: "",
		minuts: "",
		seconds: "",
	}

	getTime() {
		const date = new Date();
		const hour = String(date.getHours()).padStart(2, "0");
		const minuts = String(date.getMinutes()).padStart(2, "0");
		const seconds = String(date.getSeconds()).padStart(2, "0");
		this.setState({hour, minuts, seconds});
	}

	componentDidMount() {
		setInterval(this.getTime(), 1000);
	}

	render() {
		const { hour, minuts, seconds } = this.state;
		return <div className="clock">{`${hour}:${minuts}:${seconds}`}</div>;
	}
}

export default Clock;