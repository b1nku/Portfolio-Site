import React from "react";
import ReactDOM from "react-dom";
import WeatherComponent from "./WeatherComponent";

// Render into a specific placeholder
const placeholder = document.getElementById("weather-root");

if (placeholder) {
    ReactDOM.render(<WeatherComponent />, placeholder);
} else {
    console.error("Weather placeholder div not found. (weatherIndex.jsx)");
}