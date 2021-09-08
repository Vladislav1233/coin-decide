const defineCity = (latitude, longitude) => {
  const defaultDataCity = {
    name: "Москва",
    name_id: "moscow",
  };

  return fetch(
    `https://suggestions.dadata.ru/suggestions/api/4_1/rs/geolocate/address?lat=${latitude}&lon=${longitude}`,
    {
      headers: {
        Accept: "application/json",
        Authorization: "Token 5e22eb1e41d4a638fde5e97b229881d65e6f23f2",
      },
    }
  )
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      // console.log(res)
      if (!!res.length) {
        switch (res.suggestions[0].data.city) {
          case "Ульяновск":
            return {
              name: "Ульяновск",
              name_id: "ulyanovsk",
            };

          default:
            return defaultDataCity;
        }
      } else {
        return defaultDataCity;
      }
    });
};

export default defineCity;
