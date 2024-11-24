import React, { useEffect, useState } from "react";

import axios from "axios";

const WeatherComponent = () => {
    const [weather, setWeather] = useState(null);
    const [location, setLocation] = useState({ latitude: null, longitude: null });
    const [error, setError] = useState("");

    useEffect(() => {
        // Fetch user's location
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                setLocation({ latitude, longitude });
            },
            (err) => setError("Unable to fetch location. Please allow access.")
        );
    }, []);

    useEffect(() => {
        const fetchAndStoreWeather = async () => {
            try {
                if (location.latitude && location.longitude) {
                    const postResponse = await axios.post("/api/weather", location);
                    const getResponse = await axios.get("/api/weather");
                    setWeather(getResponse.data);
                }
            } catch (err) {
                setError("Error fetching weather datarino from the serverino.. for some reason:", err);
            }
        };

        fetchAndStoreWeather();
    }, [location]);

    return (
        <div>
            <h1>Weather in Your Area</h1>
            {error && <p style={{ color: "red" }}>{error}</p>}
            {!weather ? (
                <p>Loading...</p>
            ) : (
                <div>
                    <h2>{weather.city}</h2>
                    <p>Temperature: {weather.temperature}&#176;C</p>
                    <p>Weather: {weather.description}</p>
                    <p>Humidity: {weather.humidity}%</p>
                </div>
            )}
        </div>
    );
};

export default WeatherComponent;