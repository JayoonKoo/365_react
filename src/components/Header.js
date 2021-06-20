import React from "react";
import "./style.css";
import Clock from "./Clock";

class Header extends React.Component {
	constructor(props) {
		super(props);
		this.USER_KEY = "userName";
		this.HIDDEN_CN = "hidden";
		this.storageName = localStorage.getItem(this.USER_KEY);
		this.state = { userName: this.storageName }
		
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(event) {
		event.preventDefault();
		const loginInput = document.getElementById("login--input");
		const userName = loginInput.value;
		localStorage.setItem(this.USER_KEY, userName);
		this.loginContainer.classList.add(this.HIDDEN_CN);
		this.paintUserName(userName);
	}

	paintUserName(userName) {
		const userNameEl = document.querySelector(".username");
		userNameEl.classList.remove(this.HIDDEN_CN);
		this.setState({userName});
	}

	componentDidMount() {
		const {userName} = this.state;
		this.loginContainer = document.querySelector(".login-container");
		if (userName === null) {
			this.loginContainer.classList.remove(this.HIDDEN_CN);
		} else {
			this.paintUserName(userName);
		}
	}

  render() {
		const {userName} = this.state;
		return (
			<header>
				<div className="inner">
					<Clock />
					<div className="todo-container">
						<form id="todo-form">
							<input type="text" id="todo-input" placeholder="Today's Work"></input>
						</form>
					</div>
					<div className="login-container hidden">
						<form id="login-form" onSubmit={this.handleSubmit}>
							<input
								type="text"
								id="login-input"
								placeholder="What's your name?"
								maxLength="15"
								required={true}
							></input>
						</form>
					</div>
					<div className="username hidden">
						<span className="username__text">Hello {userName}👋</span>
					</div>
				</div>
			</header>
		)
	};
}

export default Header;
