import React from 'react';

const Login = React.createClass({
  getInitialState: function () {
    return {
      username: "",
      password: ""
    }
  },
  updateUserName: function (e){
    this.setState({
      username: e.target.value
    })
  },
  updatePassword: function (e) {
    this.setState({
      password: e.target.value
    })
  },
  submitLoginInfo: function (){
    e.preventDefault()

  },
  render: function (){
    return (
      <form onSubmit={this.submitLoginInfo}>
        <input type="text" onChange={this.updateUserName} placeholder="username"></input>
        <input type="text" onChange={this.updatePassword} placeholder="password"></input>
        <input type="submit"></input>
      </form>
    )
  }
})

export default Login;
