import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addBarAdmin, addBarIdAdmin } from 'store/admin';
import firebase from 'config/firebaseConfig';

class Admin extends Component {

  state = {
    addBar_id: "",
    addBar_address: "",
    addBar_end_work_time: "",
    addBar_latitude: "",
    addBar_longtitude: "",
    addBar_name: "",
    addBar_photo: "",
    addBar_city: "",
    addBar_id_city: ""
  };

  addBar = (event) => {
    event.preventDefault();
    this.props.addBarAdmin('bars', this.state.addBar_id, {
      address: this.state.addBar_address,
      end_work_time: this.state.addBar_end_work_time,
      geo: new firebase.firestore.GeoPoint(+this.state.addBar_latitude, +this.state.addBar_longtitude),
      name: this.state.addBar_name,
      photo: this.state.addBar_photo
    });

    this.props.addBarIdAdmin('bars_id', this.state.addBar_id_city, {
      bar_id: this.state.addBar_id,
      geo: new firebase.firestore.GeoPoint(+this.state.addBar_latitude, +this.state.addBar_longtitude)
    });
  };

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  render() {

    return(
      <div>
        <section>
          <h1>Добавить новый бар</h1>
          <a href="http://joxi.ru/Q2KYQqWCLRxe9r" target="_blank">Пример API</a>

          <form onSubmit={this.addBar}>
            <div>
              <label>Id бара</label>
              <input name="addBar_id" value={this.state.addBar_id} onChange={this.handleInputChange}/>
            </div>

            <div>
              <label>Название города</label>
              <input name="addBar_city" value={this.state.addBar_city} onChange={this.handleInputChange}/>
            </div>

            <div>
              <label>Id города (как в option при выборе)</label>
              <input name="addBar_id_city" value={this.state.addBar_id_city} onChange={this.handleInputChange}/>
            </div>

            <div>
              <label>Адрес</label>
              <input name="addBar_address" value={this.state.addBar_address} onChange={this.handleInputChange}/>
            </div>

            <div>
              <label>Время закрытия</label>
              <input name="addBar_end_work_time" value={this.state.addBar_end_work_time} onChange={this.handleInputChange}/>
            </div>

            <div>
              <label>Geo</label>
              <input name="addBar_latitude" placeholder="Широта" value={this.state.addBar_latitude} onChange={this.handleInputChange}/>
              <input name="addBar_longtitude" placeholder="Долгота" value={this.state.addBar_longtitude} onChange={this.handleInputChange}/>
            </div>

            <div>
              <label>Название</label>
              <input name="addBar_name" value={this.state.addBar_name} onChange={this.handleInputChange}/>
            </div>

            <div>
              <label>Фото</label>
              <input name="addBar_photo" value={this.state.addBar_photo} onChange={this.handleInputChange}/>
            </div>

            <button type="submit">Отправить</button>
          </form>
        </section>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addBarAdmin: (collection, doc, data) => dispatch(addBarAdmin(collection, doc, data)),
    addBarIdAdmin: (collection, doc, data) => dispatch(addBarIdAdmin(collection, doc, data))
  }
};

export default connect(null, mapDispatchToProps)(Admin);