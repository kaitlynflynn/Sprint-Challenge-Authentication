import React, { Component } from 'react';
import axios from 'axios';

class Jokes extends Component {
    state = {
        jokes: []
    };

    componentDidMount() {
        const token = localStorage.getItem('token');
        const requestOptions = { headers: { Authorization: token } };

        axios
            .get("http://localhost:5000/api/jokes", requestOptions)
            .then(res => this.setState({ jokes: res.data }))
            .catch(err => this.props.history.push('/signin'))
    }
    //LOGOUT
    handleLogout = () => {
        localStorage.removeItem('token');
        this.props.history.push('/signin');
    }

render() {
    return (
        <div>
            <button className="signout-btn" onClick={() => this.handleLogout()}>Sign Out</button>
            {this.state.jokes.map(joke => <div key={joke._id}>{joke.setup}</div>)}
        </div>
        )
    }
}

export default Jokes;