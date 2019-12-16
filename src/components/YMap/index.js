import React, { Component } from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';

class YMap extends Component {

  render() {
    const { geo } = this.props;

    return(
      <YMaps>
        <Map
          defaultState={{
            center: [geo.latitude, geo.longitude],
            zoom: 15,
          }}
          width="100%"
          height="calc(100% - 49px)"
        >
          <Placemark
            geometry={[geo.latitude, geo.longitude]}
          />
        </Map>
      </YMaps>
    )
  }
}

export default YMap;