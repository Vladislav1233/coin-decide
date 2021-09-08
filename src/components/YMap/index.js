import React, { Component } from "react";
import { YMaps, Map, Placemark } from "react-yandex-maps";

class YMap extends Component {
  render() {
    const { geo } = this.props;

    return (
      <div style={{ height: "calc(100% - 49px)" }}>
        <YMaps>
          <Map
            defaultState={{
              center: [geo.latitude, geo.longitude],
              zoom: 17,
            }}
            width="100%"
            height="100%"
          >
            <Placemark geometry={[geo.latitude, geo.longitude]} />
          </Map>
        </YMaps>
      </div>
    );
  }
}

export default YMap;
