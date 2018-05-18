import React, { Component } from 'react';
import axios from 'axios';

class SignIn extends Component {
  state = {
    username: "",
    password: ""
};

  handleLogin = event => {
    const { username, password } = this.state;
    axios
      .post("http://localhost:5000/api/login", { username, password })
      .then(res => {
        localStorage.setItem('token', res.data.token);
        this.props.history.push('/jokes');
      })
      .catch(err => console.log(err))
    this.setState({ username: "", password: "" });
  }

  render() {
    return (
      <div>
        <input className="username"
          type="text"
          name="username"
          placeholder="username"
          value={this.state.username}
          onChange={event => this.setState({ [event.target.name]: event.target.value })}
        />
        <input className="password"
          type="password"
          name="password"
          placeholder="password"
          value={this.state.password}
          onChange={event => this.setState({ [event.target.name]: event.target.value })}
        />
        <button className="signin-btn" onClick={() => this.handleLogin()}>Sign In</button>
      </div>
    )
  }
}

export default SignIn;