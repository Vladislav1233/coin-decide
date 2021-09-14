import React, { useEffect } from "react";
import { getBarList } from "store/bars";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import bem from "config/bem";
import './index.scss';

const bemCls = bem("BarList");

const BarList = ({ barList, getBarList }) => {
  useEffect(() => {
    getBarList();
  }, []);

  console.log(barList);

  return (
    <ul className={bemCls()}>
      {barList.map((item) => {
        return (
          <li key={item.id} className={bemCls("item")}>
            <Link to={`/admin/get-bar/${item.id}`} className={bemCls("link")}>
              <div>
                <img src={item.photo} />
              </div>
              <div>{item.name}</div>
              <div>{item.address}</div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

const mapStateToProps = ({ bars }) => {
  return {
    barList: bars.barList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getBarList: () => dispatch(getBarList()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BarList);
