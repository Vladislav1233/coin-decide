import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signUp } from 'store/auth';

// Note: styles
import './style.scss';

class SignUp extends Component {
  state = {
    email: '',
    password: '',
    firstName: '',
    lastName: ''
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signUp(this.state);
  };

  render() {
    const { auth, authError } = this.props;
    // TODO: включить когда настрою роутинг
    // if (auth.uid) return <Redirect to="/" />

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
          <div>
            <label>First name</label>
            <input type="text" id="firstName" onChange={this.handleChange} />
          </div>
          <div>
            <label>Last name</label>
            <input type="text" id="lastName" onChange={this.handleChange} />
          </div>

          <button>Sign in</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = ({ firebase }) => {
  return {
    auth: firebase.auth
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (newUser) => dispatch(signUp(newUser))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);