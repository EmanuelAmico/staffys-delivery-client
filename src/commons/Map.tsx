import React, { useEffect, useRef } from "react";

type Coordinates = {
  lat: number;
  lng: number;
};

type MapProps = {
  originCoordinates?: Coordinates;
  destinationCoordinates?: Coordinates;
};

const Map: React.FC<MapProps> = ({
  originCoordinates,
  destinationCoordinates,
}) => {
  const mapContainerStyle: React.CSSProperties = {
    width: "100%",
    height: "400px",
  };

  const mapRef = useRef<HTMLDivElement | null>(null);
  const mapInstanceRef = useRef<google.maps.Map | null>(null);
  const directionsRendererRef = useRef<google.maps.DirectionsRenderer | null>(
    null
  );

  useEffect(() => {
    if (originCoordinates && destinationCoordinates) {
      const onLoad = () => {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const map = new google.maps.Map(mapRef.current!, {
          center: originCoordinates,
          zoom: 12,
        });
        mapInstanceRef.current = map;

        const directionsRenderer = new google.maps.DirectionsRenderer();
        directionsRenderer.setMap(map);
        directionsRendererRef.current = directionsRenderer;

        const directionsService = new google.maps.DirectionsService();

        const request = {
          origin: originCoordinates,
          destination: destinationCoordinates,
          travelMode: google.maps.TravelMode.DRIVING, // Cambia esto a google.maps.TravelMode.MOTORCYCLING para mostrar la ruta en moto
        };

        directionsService.route(request, (response, status) => {
          if (status === google.maps.DirectionsStatus.OK) {
            directionsRenderer.setDirections(response);
          }
        });
      };

      if (!window.google) {
        const script = document.createElement("script");
        script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}`;
        script.async = true;
        script.onload = onLoad;
        document.head.appendChild(script);
      } else {
        onLoad();
      }
    }
  }, [originCoordinates, destinationCoordinates]);

  return (
    <div
      style={mapContainerStyle}
      ref={(element) => {
        if (element) {
          mapRef.current = element;
        }
      }}
    />
  );
};

export default Map;
