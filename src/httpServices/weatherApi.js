import moment from "moment/moment";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPIDAPI_KEY,
    "X-RapidAPI-Host": process.env.REACT_APP_RAPIDAPI_HOST,
  },
};

export async function getWeather(tempunit = "C", locationName = "chennai") {
  const { lid, location } = (await getLocationId(locationName)) || 102643743;

  return await fetch(
    `https://foreca-weather.p.rapidapi.com/forecast/daily/${lid}?alt=0&tempunit=${tempunit}&windunit=MS&periods=8&dataset=full`,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      const data = response.forecast || [];

      return data.map((d) => {
        const date = moment(d.date).format("ddd, D MMM");

        return {
          date,
          mintemp: d.minTemp,
          maxtemp: d.maxTemp,
          status: d.symbolPhrase.toLowerCase().split(" ").join(""),
          windSpeed: d.maxWindSpeed,
          humidity: d.maxRelHumidity,
          visibility: d.minVisibility,
          airPressure: d.pressure.toFixed(0),
          windDir: d.windDir,
          location,
        };
      });
    })
    .catch((err) => console.error(err));
}

async function getLocationId(locationName) {
  return await fetch(
    `https://foreca-weather.p.rapidapi.com/location/search/${locationName}?lang=en&country=in`,
    options
  )
    .then((response) => response.json())
    .then((response) => ({
      lid: response.locations[0].id,
      location: response.locations[0].name,
    }))
    .catch(() => ({
      lid: 101264527,
      location: "chennai",
    }));
}
