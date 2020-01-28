const defineCity = () => {

  navigator.geolocation.getCurrentPosition(pos => {
    console.log(pos)
  });

  return fetch('https://suggestions.dadata.ru/suggestions/api/4_1/rs/geolocate/address?lat=54.27407475668302&lon=48.290007399536066', {
    headers: {
      Accept: 'application/json',
      Authorization: 'Token 5e22eb1e41d4a638fde5e97b229881d65e6f23f2'
    }
  }).then(res => {
    return res.json();
  }).then(res => {
    console.log(res.suggestions[0])
    switch (res.suggestions[0].data.city) {
      case 'Ульяновск':
        return {
          name: 'Ульяновск',
          name_id: 'ulyanovsk'
        }

      default:
        return {
          name: 'Москва',
          name_id: 'moscow'
        }
    }
  })
};

export default defineCity;
