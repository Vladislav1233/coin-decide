import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { signIn } from "store/auth";
import bem from "config/bem";


// Note: components
import AuthFormUi from 'components/AuthFormUi';

// Note: styles
import "./style.scss";

const bemClass = bem("sign");

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
      <AuthFormUi
        link={{
          to: "/signup",
          text: "Регистрация"
        }}
        title="Вход"
      >
        <Fragment>
          <form onSubmit={this.handleSubmit} className={bemClass("form")}>
            <div className={bemClass("inputGroup")}>
              <input
                className={bemClass("input")}
                type="email"
                id="email"
                placeholder="Почта"
                onChange={this.handleChange}
              />
              <input
                className={bemClass("input")}
                type="password"
                id="password"
                placeholder="Пароль"
                onChange={this.handleChange}
              />
            </div>

            <button type="submit" className={bemClass("goBtn")}>
              <svg
                width="44"
                height="44"
                viewBox="0 0 44 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22 0C9.84995 0 0 9.84995 0 22C0 34.15 9.84995 44 22 44C34.15 44 44 34.15 44 22C44 9.84995 34.15 0 22 0ZM19.5563 10.8953L36.2145 22L19.5563 33.1047V27.1215H7.78554V16.8791H19.5563V10.8953Z"
                  fill="black"
                />
              </svg>
            </button>
          </form>

          {/* <span>Забыли пароль?</span> */}
        </Fragment>
      </AuthFormUi>
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
