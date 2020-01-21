import React, { Component } from "react";
import { connect } from "react-redux";
import { signIn } from "store/auth";

// Note: styles
import "./style.scss";

class SignIn extends Component {
  state = {
    email: "",
    password: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.signIn(this.state);
  };

  render() {
    console.log(this.props.authError);
    return (
      <main>
        <svg
          className="sign__bg sign__bg--top"
          width="353"
          height="202"
          viewBox="0 0 353 202"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0)">
            <path
              d="M5.58143 186.402C-16.7847 207.411 -42.623 207.145 -52.7464 204.386L-155.265 132.124L8.44741 -126.602L371.796 -86.1431C389.379 -90.0134 418.431 -86.5454 393.968 -41.7113C363.389 14.3314 212.039 12.1655 119.967 39.6799C27.8952 67.1944 33.5391 160.141 5.58143 186.402Z"
              fill="url(#paint0_linear)"
              stroke="#21372A"
              stroke-width="10"
            />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="-108.245"
              y1="-131.207"
              x2="373.566"
              y2="209.205"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#09C883" />
              <stop offset="1" stop-color="#086A29" />
            </linearGradient>
            <clipPath id="clip0">
              <rect width="353" height="202" fill="white" />
            </clipPath>
          </defs>
        </svg>

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

        <svg
          className="sign__bg sign__bg--bottom"
          width="280"
          height="173"
          viewBox="0 0 280 173"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0)">
            <path
              d="M118.5 141.5C0.5 158 4.5 173.5 -10 225V254H301.5V7C289.833 8.83333 263.9 17.8 253.5 39C240.5 65.5 236.5 125 118.5 141.5Z"
              fill="url(#paint0_linear)"
              stroke="#21372A"
              stroke-width="10"
            />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="0.279499"
              y1="14.9589"
              x2="329.654"
              y2="160.601"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#09C883" />
              <stop offset="1" stop-color="#086A29" />
            </linearGradient>
            <clipPath id="clip0">
              <rect width="280" height="173" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </main>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return {
    authError: auth.authError
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signIn: creds => dispatch(signIn(creds))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
