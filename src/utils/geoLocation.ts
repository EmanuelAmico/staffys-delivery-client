export async function getCurrentCoordinates(): Promise<{
  direction: string;
  coordenates: { lat: number; lng: number };
}> {
  if (navigator.geolocation) {
    const position = await new Promise<GeolocationPosition>(
      (resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      }
    );

    const latitud = position.coords.latitude;
    const longitud = position.coords.longitude;

    const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitud},${longitud}&key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}`;

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("HTTP request error: " + response.status);
    }

    const data = await response.json();
    const direction = data.results[0].formatted_address;
    const coordenates = data.results[0].geometry.location;

    return { direction, coordenates };
  } else {
    throw new Error("Geolocation not supported");
  }
}
