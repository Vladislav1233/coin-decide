import React, { Component } from "react";
import { connect } from "react-redux";
import { signUp } from "store/auth";
import bem from "config/bem";

// Note: components
import AuthFormUi from "components/AuthFormUi";

// Note: styles
import "./style.scss";

const bemClass = bem("sign");

class SignUp extends Component {
  state = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signUp(this.state);
  };

  render() {
    // const { auth, authError } = this.props;
    // TODO: включить когда настрою роутинг
    // if (auth.uid) return <Redirect to="/" />

    return (
      <AuthFormUi
        link={{
          to: "/signin",
          text: "Вход",
        }}
        title="Регистрация"
      >
        <form onSubmit={this.handleSubmit} className={bemClass("form")}>
          <div className={bemClass("inputGroup")}>
            <input
              className={bemClass("input")}
              placeholder="Почта"
              type="email"
              id="email"
              onChange={this.handleChange}
            />
            <input
              className={bemClass("input")}
              placeholder="Пароль"
              type="password"
              id="password"
              onChange={this.handleChange}
            />
            <input
              className={bemClass("input")}
              placeholder="Имя"
              type="text"
              id="firstName"
              onChange={this.handleChange}
            />
            <input
              className={bemClass("input")}
              placeholder="Фамилия"
              type="text"
              id="lastName"
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
      </AuthFormUi>
    );
  }
}

const mapStateToProps = ({ firebase }) => {
  return {
    auth: firebase.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (newUser) => dispatch(signUp(newUser)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
