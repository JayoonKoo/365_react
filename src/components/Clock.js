import React, { useState } from "react";

function Clock() {
	const [date, setDate] = useState(new Date());
	let hour = "";
	let minuts = "";
	let seconds = "";

	const setTime = () => {
		hour = String(date.getHours()).padStart(2, "0");
		minuts = String(date.getMinutes()).padStart(2, "0");
		seconds = String(date.getSeconds()).padStart(2, "0");
	}

	setTime();
	const getTime = () => {
		setDate(new Date());
		setTime();
	}

	setInterval(getTime, 1000);
	return (
		<div className="clock">{`${hour}:${minuts}:${seconds}`}</div>
	)
}

export default Clock;