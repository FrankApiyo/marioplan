import React, { Component } from 'react'

class Signin extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            email: '',
            password: ''
        };
    }
    handleChange = (e) => {

        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }
    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Sign in</h5>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.handleChange} value={this.state.email}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">password</label>
                        <input type="password" id="password" onChange={this.handleChange} value={this.state.password}/>
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">login</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Signin