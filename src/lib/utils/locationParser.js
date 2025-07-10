export const locationToAddress = async (location) => {
  const URL = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${location.lat}&lon=${location.lon}&zoom=20`;
  const reverseGeocodingUrl = URL;

  
  const response = await fetch(reverseGeocodingUrl);
  if (!response.ok) {
    const txt = response.text();
    console.error(txt);
    throw new Error("location to address failed");
  } else {
    
    const json = await response.json();
    return json.address;
  }
};
