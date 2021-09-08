import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

// Note: actions
import { getPromocodesForUser } from "store/promocodes";

// Note: Components
import PromocodeItem from "./PromocodeItem";

// Note: styles
import "./style.scss";

class PromocodeList extends Component {
  componentDidMount() {
    if (this.props.auth.uid) {
      this.props.getPromocodesForUser(this.props.auth.uid);
    }
  }

  render() {
    const { auth, promocodes } = this.props;

    return (
      <ul className="b-promocode-list">
        {!!auth.uid ? (
          promocodes && promocodes.length > 0 ? (
            promocodes.map((promocode, index) => {
              return (
                <li key={index} className="b-promocode-list__item">
                  <PromocodeItem
                    name_bar={promocode.name_bar}
                    prize={promocode.prize}
                    is_check={promocode.is_check}
                    duration_action={promocode.prize.expires}
                    id={promocode.id}
                    bar_id={promocode.bar_id}
                    code={promocode.code}
                    qr_code={promocode.qr_code}
                    photo={promocode.photo}
                  />
                </li>
              );
            })
          ) : (
            <li className="b-promocode-list__empty">
              У вас ещё нет промокодов. Бросьте монетку, чтобы выиграть скидку в
              баре.
            </li>
          )
        ) : (
          <li className="b-promocode-list__registration">
            <Link to="/signin">Войдите</Link>
            <div className="b-promocode-list__help">
              чтобы видеть все свои промокоды
            </div>
          </li>
        )}
      </ul>
    );
  }
}

const mapStateToProps = ({ firebase, promocodes }) => {
  return {
    promocodes: promocodes.promocodesForUser,
    auth: firebase.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPromocodesForUser: (uidUser) => dispatch(getPromocodesForUser(uidUser)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PromocodeList);
