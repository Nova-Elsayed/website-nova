export const locationToAddress = async (location) => {
  const URL = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${location.lat}&lon=${location.lon}&zoom=20`;
  const reverseGeocodingUrl = URL;
  const response = await fetch(reverseGeocodingUrl);
  const json = await response.json();

  //   console.log(json);

  return json.address;
};
