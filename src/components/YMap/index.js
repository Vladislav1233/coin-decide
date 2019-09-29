import React, { Component } from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';

class YMap extends Component {
  render() {
    return(
      <YMaps>
        <Map 
          defaultState={{
            center: [55.751574, 37.573856],
            zoom: 15,
          }}
          width="100%"
          height="calc(100% - 49px)"
        >
          <Placemark 
            geometry={[55.751574, 37.573856]}
          />
        </Map>
      </YMaps>
    )
  }
}

export default YMap;