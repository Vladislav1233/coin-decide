import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn } from 'store/auth';

// Note: styles
import './style.scss';

class SignIn extends Component {
  state = {
    email: '',
    password: ''
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signIn(this.state);
  };

  render() {
    console.log(this.props.authError);
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Email</label>
            <input type="email" id="email" onChange={this.handleChange} />
          </div>
          <div>
            <label>Password</label>
            <input type="password" id="password" onChange={this.handleChange} />
          </div>

          <button>Sign in</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = ({ auth }) => {
  return {
    authError: auth.authError
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);